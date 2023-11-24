/* eslint-disable max-len */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AlertController, IonItemSliding, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Productos } from 'src/app/pruebas/pedido/producto.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnDestroy {
  products: Productos[] = [];
  someSubscription: any;

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
    this.reload();
    
  }

  reload(){
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.someSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
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

  ngOnDestroy() {
    if (this.someSubscription) {
      this.someSubscription.unsubscribe();
    }
  }

  handleRefresh(event) {
    setTimeout(() => {
      this.products.splice(0, this.products.length);
      let id = parseInt(this.authService.userId)
      this.getProductsById(id);    
      event.target.complete();
    }, 2000);
  }
}
