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
    //this.getProductById(this.getIDfromURL());
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
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(45)]
      }),
      image: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(250)]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(45)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      })
    });

    //this.getProductById(this.getIDfromURL());
    this.obtenerDatos();
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
        console.log(resp);
        /*this.product = {
          id: resp.id,
          nombre: resp.nombre,
          des: resp.des,
          precio: resp.precio,
          restaurante: resp.restaurante,
          foto: resp.foto
        };*/
        this.product.id = resp.id;
        this.product.nombre = resp.nombre;
        this.product.des = resp.des;
        this.product.precio = resp.precio;
        this.product.restaurante = resp.restaurante;
        this.product.foto = resp.foto;

        /*
        this.form.value.title = this.product.nombre;
        this.form.value.description = this.product.des;
        this.form.value.price = this.product.precio;
        this.form.value.image = this.product.foto;*/

        console.log('INFO RECIBIDA:');
        console.log('product id: '+this.product.id);
        console.log('product title: '+this.product.nombre);
        console.log('product desc: '+this.product.des);
        console.log('product img: '+this.product.precio);
        console.log('product restaurant: '+this.product.restaurante);
        console.log('product price: '+this.product.foto);

      }
    );

    
  }

  updateProduct(){
    console.log('TO BE SENT:');
    console.log('product title: '+this.product.nombre);
    console.log('product desc: '+this.product.des);
    console.log('product price: '+this.product.precio);
    console.log('product image: '+this.product.foto);

    if (!this.form.valid) {
          return;
        }
        this.loadingController.create({
          message: 'Updating place...'
        }).then(loadingEl => {
          loadingEl.present();
          this.placesService.updateProduct(Number(this.product.id), this.product.nombre, this.product.des, this.product.precio, this.product.foto)
          .subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigateByUrl('/home/tabs/offers');
          });
        });
  }

  obtenerDatos(){
    this.getProductById(this.getIDfromURL());
  }

}
