/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { PlaceData } from 'src/app/interfaces/place-data';
import { AuthService } from 'src/app/auth/auth.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;
  newPlace: PlaceData = {
    title: 'string',
    description: 'string',
    imageURL: 'string',
    price: 0,
    availableFrom: '2023-06-24',
    availableTo: '2023-06-24',
    userId: 'string'
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
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
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

  //NEW
  createPlace() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Creating place...'
    }).then(loadingEl => {
      loadingEl.present();

      this.newPlace.userId = this.authService.userId;
      this.newPlace.title = this.form.value.title;
      this.newPlace.description = this.form.value.description;
      this.newPlace.imageURL = this.form.value.imageURL;
      this.newPlace.price = this.form.value.price;
      this.newPlace.availableFrom = this.datePipe.transform(this.form.value.dateFrom,'yyyy-MM-dd');
      this.newPlace.availableTo = this.datePipe.transform(this.form.value.dateTo,'yyyy-MM-dd');

      this.placesService.newPlace(this.newPlace).subscribe(() => {
        loadingEl.dismiss();
        this.form.reset();
        this.router.navigate(['/home/tabs/offers']);
      });
    });

  }

}
