/* eslint-disable max-len */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent, IonItemSliding, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Restaurantes } from 'src/app/interfaces/restaurantes';
import { Productos } from 'src/app/pruebas/pedido/producto.model';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage {
  products: Productos[] = [];

  constructor(
    private placesService: PlacesService,
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController) {
  }

  ionViewWillEnter(){
    let id = parseInt(this.authService.userId)
    this.getProductsById(id);    
  }

  getProductsById(restaurant: number){
    //convertir datos json del servidor a string
    this.placesService.getProductsByID(restaurant).subscribe(
      (resp) => {
        const listString = JSON.stringify(resp);
        //lista todos los productos
        this.products = JSON.parse(listString);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onClickItem(i: any){
    this.router.navigate(['/pruebas/pedido/'+i]);
  }

  onEdit(offerId: number, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['/', 'home', 'tabs', 'offers', 'edit', offerId]);
    console.log('editing item', offerId);
  }

  onDelete(offerId: number, slidingItem: IonItemSliding){
    slidingItem.close();
    console.log('[SUCCESS] deleting item', offerId);
    //convert to number
    const id = +offerId;
    this.placesService.deleteProduct(id).subscribe();
    this.ionViewWillEnter();
  }

  async presentAlert(offerId: number, slidingItem: IonItemSliding){
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
}
