import { Component, OnDestroy, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { Restaurantes } from 'src/app/interfaces/restaurantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {
  //NEW
  places: Place[];
  //PAST PROJECT
  loadedPlaces: Place[];
  bookable: Place[];
  relevant: Place[];
  filter = 'all';
  userId = 'new';
  private placesSub: Subscription;
  listRestaurants: Restaurantes[] = [];

  constructor(private placesService: PlacesService, private authService: AuthService, private loadingController: LoadingController, private router: Router) { }

  ngOnInit(): void {
  }

  ionViewWillEnter() {
    this.listarRestaurantes();
  }

  ngOnDestroy(): void {
  }

  listarRestaurantes(): void{
    this.placesService.getRestaurants().subscribe(
      (res) => {
        //variable para guardar la conversion de datos json a string
        const listString = JSON.stringify(res);
        //concatena los datos que se reciben uno a uno en listString en el arreglo ListCoor
        this.listRestaurants = JSON.parse(listString);
      },
      (e) => {
        console.log('ERROR: ' + e);
      }
    );
  }

  onClickItem(i: any){
    this.router.navigate(['/pruebas/'+i]);
  }

}
