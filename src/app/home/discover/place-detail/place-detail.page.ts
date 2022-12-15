import { JsonpClientBackend, JsonpInterceptor } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { BookingService } from 'src/app/bookings/booking.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Booking } from 'src/app/interfaces/booking';
import { PlacesData } from 'src/app/interfaces/places-data';

import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnDestroy {
  place : PlacesData = {
    id: 0,
    title: 'place',
    description: 'string',
    imageURL: 'string',
    price: 0,
    availableFrom: 'string',
    availableTo: 'string',
    userId: 'string',
    location: 'string'
  };

  newPlace: Booking = {
    id: 'string',
    placeId: 'string',
    userId: 'string',
    placeTitle: 'string',
    placeImg: '2023-06-24',
    firstName: '2023-06-24',
    lastName: 'string',
    guestNumber: 0,
    bookedFrom: null,
    bookedTo: null
  };

  postTumblr = {
    imagen: 'string',
    caption: 'string',
    url: 'string'
  };

  isBookable = true;

  private placeSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private actionSheetCtrl: ActionSheetController,
    private bookingService: BookingService,
    private loadingController: LoadingController,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() { 
    this.apiTumblr();
    //this.getPlaceById();
  }

  apiTumblr(){
    var num: number = Math.floor(Math.random()*((2+1)-0)+0);

    var requestOptions = {
      method: 'GET',
    };

    fetch("https://api.tumblr.com/v2/blog/dean-loves-pie-plus-cass.tumblr.com/posts?api_key=MhcK4wmIFn8kwpnu8OSAuoskTsYFf4zQiP1p6SiPmptDiSO1XR", requestOptions)
    .then(response => response.json())
      .then(tumblrData => {
          //console.log(tumblrData);
          //console.log(tumblrData.response.posts[num].summary);
          this.postTumblr.caption = tumblrData.response.posts[num].summary;
          this.postTumblr.imagen = tumblrData.response.posts[num].photos[0].original_size.url;
          this.postTumblr.url = tumblrData.response.posts[num].post_url;
      })
      .catch(error => console.log('error', error));
  }

  ionViewWillEnter(){
    this.getPlaceById(this.getIDfromURL());
  }

  //NEW
  getPlaceById(place: number){
    this.placesService.getPlaceById(place).subscribe(
      (resp: any) => {
        this.place = {
          id: resp[0].id,
          title: resp[0].title,
          description: resp[0].description,
          imageURL: resp[0].imageURL,
          price: resp[0].price,
          availableFrom: resp[0].availableFrom,
          availableTo: resp[0].availableTo,
          userId: resp[0].userId,
          location: resp[0].location
        };
      }
    );
  }
  getIDfromURL(){
    const url = this.router.url;
    const arr = url.split('/', 5);
    const id = parseInt(arr[4],10);
    console.log('el numero en el url es: '+id);
    return id;
  }
  //PAST
  onBookPlace() {
    this.actionSheetCtrl.create({
      header: 'Choose an action',
      buttons: [
        {
          text: 'Select Date',
          handler: () => {
            this.openBookingModal('select');
          }
        },
        {
          text: 'Random Date',
          handler: () => {
            this.openBookingModal('random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    })
      .then(actionSheetEL => {
        actionSheetEL.present();
      });
  }

  openBookingModal(mode: 'select' | 'random') {
    console.log(mode);
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { selectedPlace: this.place, selectedMode: mode },
      })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(resultData => {
        if (resultData.role === 'confirm') {
          this.loadingController.create({
            message: 'Booking place...'
          }).then(loadingEl => {
            loadingEl.present();
            /*
            var numero = this.getIDfromURL();
            this.getPlaceById(numero);

            this.newPlace.id = Math.random().toString();
            this.newPlace.placeId = this.place.id.toString();
            this.newPlace.userId = this.authService.userId;
            this.newPlace.placeTitle = this.place.title;
            this.newPlace.placeImg = this.place.imageURL;
            this.newPlace.firstName = 'Paola';
            this.newPlace.lastName = 'Alba';
            this.newPlace.guestNumber = this.datePipe.transform(this.form.value.dateFrom,'yyyy-MM-dd');
            this.newPlace.bookedFrom = this.datePipe.transform(this.form.value.dateTo,'yyyy-MM-dd');
            this.newPlace.bookedTo = this.form.value.location;
            
            this.placesService.newPlace(this.newPlace).subscribe(() => {
              loadingEl.dismiss();
              this.form.reset();
              this.router.navigate(['/home/tabs/offers']);
            });
            */
            
            const data = resultData.data.bookingData;
            this.bookingService.addBooking(
              '0',
              this.place.title,
              this.place.imageURL,
              data.first,
              data.last,
              data.guest,
              data.start,
              data.end
            ).subscribe(() => {
              loadingEl.dismiss();
            });
          });
        }
      });
  }

  ngOnDestroy(): void {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

}
