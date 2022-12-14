import { Component, OnDestroy, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

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

  constructor(private placesService: PlacesService, private authService: AuthService, private loadingController: LoadingController) { }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.loadedPlaces = places;
      this.onFilterUpdate(this.filter);
    });
  }

  onFilterUpdate(filter: string){
    const isShown = place => filter === 'all' || place.userId !== this.authService.userId;
    this.relevant = this.loadedPlaces.filter(isShown);
    this.userId = this.authService.userId;
    this.filter = filter;
    console.log('value it: ' + this.filter);
  }

  ionViewWillEnter() {
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
        //lista todos los lugares
        this.places = JSON.parse(listString);
        //lista solos los que puede hacer reservacion
        this.bookable = JSON.parse(listString);
        console.log('userId: ' + this.authService.userId);
        //let j=0;
        for (let i = 0; i < this.bookable.length; i++) {
          console.log('JSON Places ' + i + ': ' + this.bookable[i].title);

          if (this.bookable[i].userId === this.authService.userId) {
            console.log('entro a filtro '+this.bookable[i].title);
            this.bookable.splice(i,i);
            if(i!==0){i--;}
          }

        }
        event?.target.complete();
      },
      (err) => {
        console.log(err.message);
        loading.dismiss();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.placesSub) {
      this.placesSub.unsubscribe();
    }
  }

}
