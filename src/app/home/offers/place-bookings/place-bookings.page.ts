import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoAdd } from 'src/app/interfaces/producto-add';

@Component({
  selector: 'app-place-bookings',
  templateUrl: './place-bookings.page.html',
  styleUrls: ['./place-bookings.page.scss'],
})
export class PlaceBookingsPage implements OnInit, OnDestroy {
  place: Place;
  private placeSub: Subscription;
  idOffer: any;
  productName: any;

  product: ProductoAdd = {
    nombre: 'product',
    des: 'string',
    precio: 'string',
    res: 0,
    imagen: 'string'
  }

  constructor(private route: ActivatedRoute, private router: Router, private navCtrl: NavController, private placesService: PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('placeId')){
        this.navCtrl.navigateBack('/home/tabs/offers');
        return;
      }
      this.placeSub = this.placesService.getPlace(paramMap.get('placeId')).subscribe(place => {
        this.place = place;
      });
    });
    this.getProductById(this.getIDfromURL());
  }

  getIDfromURL(){
    const url = this.router.url;
    const arr = url.split('/', 5);
    const id = parseInt(arr[4],10);
    console.log('el numero en el url es: '+id);
    this.idOffer = id;
    return id;
  }

  getProductById(product: number){
    this.placesService.getProductByID(product).subscribe(
      (resp: any) => {
        console.log(resp);
        console.log(resp.nombre);
        this.product = {
          nombre: resp.nombre,
          des: resp.des,
          precio: resp.precio,
          res: resp.res,
          imagen: resp.imagen
        };
        this.productName = resp.nombre;
      }
    );

    
  }

  destroyProduct(){
    this.placesService.deleteProduct(this.idOffer).subscribe(
      (resp: any) => {
        console.log(resp);
        console.log("Producto "+this.idOffer+ " eliminado");
      }
    );
    this.router.navigateByUrl('/home/tabs/offers');
  }

  ngOnDestroy(): void {
    if(this.placeSub){
      this.placeSub.unsubscribe();
    }
  }

}
