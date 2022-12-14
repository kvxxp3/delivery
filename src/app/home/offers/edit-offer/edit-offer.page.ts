import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { PlacesData } from 'src/app/interfaces/places-data';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {
  place: Place;
  placeS: PlacesData;
  placeID = {
    id: 0,
    title: 'place',
    description: 'string',
    imageURL: 'string',
    price: 0,
    availableFrom: 'string',
    availableTo: 'string',
    userId: 'string'
  };
  form: FormGroup;
  private placeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ionViewWillEnter(){
    // this.getPlaceById(this.getIDfromURL());
    // this.form = new FormGroup({
    //   title: new FormControl(this.placeID.title, {
    //     updateOn: 'blur',
    //     validators: [Validators.required]
    //   }),
    //   description: new FormControl(this.placeID.description, {
    //     updateOn: 'blur',
    //     validators: [Validators.required, Validators.maxLength(180)]
    //   })
    // });
    this.getPlaceById(this.getIDfromURL());
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      // if (!paramMap.has('placeId')) {
      //   this.navCtrl.navigateBack('/home/tabs/offers');
      //   return;
      // }
      this.placeSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
        this.place = place;
        this.form = new FormGroup({
          title: new FormControl(this.place.title, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          description: new FormControl(this.place.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)]
          })
        });
      });
    });

    this.form = new FormGroup({
      title: new FormControl(this.placeID.title, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(this.placeID.description, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      })
    });

    this.getPlaceById(this.getIDfromURL());
  }
  //NEW
  getIDfromURL(){
    const url = this.router.url;
    const arr = url.split('/', 6);
    const id = parseInt(arr[5],10);
    console.log('el numero en el url es: '+id);
    return id;
  }
  getPlaceById(place: number){
    this.placesService.getPlaceById(place).subscribe(
      (resp: any) => {
        this.placeID = {
          id: resp[0].id,
          title: resp[0].title,
          description: resp[0].description,
          imageURL: resp[0].imageURL,
          price: resp[0].price,
          availableFrom: resp[0].availableFrom,
          availableTo: resp[0].availableTo,
          userId: resp[0].userId
        };
      }
    );
    console.log('TO BE EDITED:');
    console.log('place id: '+this.placeID.id);
    console.log('place id: '+this.placeID.title);
    console.log('place id: '+this.placeID.description);
  }
  updatePlace(){
    console.log('TO BE SEND:');
    console.log('place id: '+this.placeID.id);
    console.log('place title: '+this.placeID.title);
    console.log('place desc: '+this.placeID.description);
    console.log('place img: '+this.placeID.imageURL);
    console.log('place price: '+this.placeID.price);

    if (!this.form.valid) {
          return;
        }
        this.loadingController.create({
          message: 'Updating place...'
        }).then(loadingEl => {
          loadingEl.present();
          this.placesService.updatePlace(this.placeID)
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigateByUrl('/home/tabs/offers');
          });
        });
  }

  ngOnDestroy(): void {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

}
