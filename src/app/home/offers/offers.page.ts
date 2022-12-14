/* eslint-disable max-len */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent, IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {
  //FALTA AGREGAR METODOS DE VALIDACION PARA COMPROBRAR QUE LOS LUGARES LISTADOS TENGAN COMO
  //AUTOR EL USUARIO DE LA SESION INICIADA
  places: Place[];
  offers: Place[];
  sub: Place[];
  private placesSub: Subscription;

  constructor(private placesService: PlacesService, private router: Router, private loadingController: LoadingController, private authService: AuthService, private alertController: AlertController) { }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.sub = places;
    });
  }

  ionViewWillEnter(){
    this.loadPlaces();
  }

  async loadPlaces(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles'
    }
    );
    await loading.present();
    //convertir data json recibido del servidor a string
    this.placesService.listPlaces().subscribe(
      (resp) => {
        loading.dismiss();
        const listString = JSON.stringify(resp);
        this.offers = JSON.parse(listString);
        console.log('userId: ' + this.authService.userId);
        //muestra solo los lugares que registro el usuario
        for (let i = 0; i < this.offers.length; i++) {
          console.log('JSON Places ' + i + ': ' + this.offers[i].title);
          let j=i;
          if (this.offers[i].userId !== this.authService.userId) {
            if(i===0){j=1;}
            console.log('entro a filtro '+this.offers[i].title);
            this.offers.splice(i,j);
            if(i!==0){i--;}
          }

        }
        //GUARDADOS
        for (let i = 0; i < this.offers.length; i++) {
          console.log('GUARDADOS\nJSON Places ' + i + ': ' + this.offers[i].title);
        }
        event?.target.complete();
      },
      (err) => {
        console.log(err.message);
        loading.dismiss();
      }
    );
  }

  onEdit(offerId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'home', 'tabs', 'offers', 'edit', offerId]);
    console.log('editing item', offerId);
  }

  onDelete(offerId: string, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log('[SUCCESS] deleting item', offerId);
    //convert to number
    const id = +offerId;
    this.placesService.deletePlace(id).subscribe();
    this.ionViewWillEnter();
    //this.router.navigateByUrl('/home/tabs/offers');
    //this.router.navigate(['/', 'home', 'tabs', 'offers']);
  }

  async presentAlert(offerId: string, slidingItem: IonItemSliding){
    const alert = await this.alertController.create({
      header: 'Are you sure you want to delete this offer?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          role: 'confirm'
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('ROLE: '+role);
    if(role==='confirm'){
      this.onDelete(offerId, slidingItem);
    }
  }

  ngOnDestroy(): void {
    if(this.placesSub){
      this.placesSub.unsubscribe();
    }
  }
}
