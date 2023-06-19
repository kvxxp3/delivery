/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { PlaceData } from 'src/app/interfaces/place-data';
import { Producto } from 'src/app/interfaces/producto';
import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';
import { ProductoAdd } from 'src/app/interfaces/producto-add';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  newProducto: ProductoAdd = {
    nombre: 'string',
    des: 'string',
    precio: 'string',
    res: 0,
    imagen: 'string'
  };

  constructor(public datePipe: DatePipe, private placesService: PlacesService, private router: Router, private loadingCtrl: LoadingController, private authService: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      imageURL: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      })
    });
  }

  onCreateOffer() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Creating place...'
    }).then(loadingEl => {
      loadingEl.present();

      this.placesService.addPlace(
        this.form.value.title,
        this.form.value.description,
        +this.form.value.price,
        new Date(this.form.value.dateFrom),
        new Date(this.form.value.dateTo),
      ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/home/tabs/offers']);
      });
    });
  }

  createProduct(){
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Creating product...'
    }).then(loadingEl => {
      loadingEl.present();

      this.newProducto.nombre = this.form.value.title;
      this.newProducto.des = this.form.value.description;
      this.newProducto.precio = this.form.value.price;
      this.newProducto.imagen = this.form.value.imageURL;
      this.newProducto.res = +this.authService.userId;

      console.log(this.newProducto);

      this.placesService.addProduct(
        this.newProducto.nombre, 
        this.newProducto.des,
        this.newProducto.precio,
        +this.newProducto.res,
        this.newProducto.imagen
        ).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/home/tabs/offers']);
      });
    });
  }

}
