import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { PlacesData } from 'src/app/interfaces/places-data';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  form: FormGroup;
  product: Producto = {
    id: 0,
    nombre: 'product',
    des: 'string',
    precio: 'string',
    restaurante: 'string',
    foto: 'string'
  };
  productSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private navCtrl: NavController,
    private router: Router,
    private loadingController: LoadingController
  ) { }

  ionViewWillEnter(){
    this.getProductById(this.getIDfromURL());
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(paramMap => {
    //   this.productSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
    //     this.place = place;
    //     this.form = new FormGroup({
    //       title: new FormControl(this.place.title, {
    //         updateOn: 'blur',
    //         validators: [Validators.required]
    //       }),
    //       description: new FormControl(this.place.description, {
    //         updateOn: 'blur',
    //         validators: [Validators.required, Validators.maxLength(180)]
    //       })
    //     });
    //   });
    // });

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

    this.getProductById(this.getIDfromURL());
  }

  getIDfromURL(){
    const url = this.router.url;
    const arr = url.split('/', 6);
    const id = parseInt(arr[5],10);
    console.log('el numero en el url es: '+id);
    return id;
  }

  getProductById(product: number){
    this.placesService.getProductByID(product).subscribe(
      (resp: any) => {
        this.product = {
          id: resp.id,
          nombre: resp.nombre,
          des: resp.des,
          precio: resp.precio,
          restaurante: resp.restaurante,
          foto: resp.foto
        };
      }
    );

    console.log('INFO RECIBIDA:');
    console.log('place id: '+this.product.id);
    console.log('place title: '+this.product.nombre);
    console.log('place desc: '+this.product.des);
    console.log('place img: '+this.product.precio);
    console.log('place price: '+this.product.restaurante);
    console.log('place price: '+this.product.foto);
  }

  updateProduct(){
    console.log('TO BE SENT:');
    console.log('product title: '+this.form.value.nombre);
    console.log('product desc: '+this.form.value.des);
    console.log('product price: '+this.form.value.precio);
    console.log('product image: '+this.form.value.foto);

    if (!this.form.valid) {
          return;
        }
        this.loadingController.create({
          message: 'Updating place...'
        }).then(loadingEl => {
          loadingEl.present();
          this.placesService.updateProduct(this.getIDfromURL(), this.form.value.nombre, this.form.value.des, this.form.value.precio, this.form.value.foto)
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigateByUrl('/home/tabs/offers');
          });
        });
  }
}
