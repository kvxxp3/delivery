import { Component, OnDestroy, OnInit } from '@angular/core';
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
  loadedPlaces: Place[];
  relevant: Place[];
  private placesSub: Subscription;
  private filter = 'all';

  constructor(private placesService: PlacesService, private authService: AuthService) { }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.loadedPlaces = places;
      this.onFilterUpdate(this.filter);
    });
  }

  onFilterUpdate(filter: string){
    const isShown = place => filter === 'all' || place.userId !== this.authService.userId;
    this.relevant = this.loadedPlaces.filter(isShown);
    this.filter = filter;
  }

  // onFilterUpdate(filter: string) {
  //   this.authService.userId.pipe(take(1)).subscribe(userId => {
  //     const isShown = place => filter === 'all' || place.userId !== userId;
  //     this.relevantPlaces = this.loadedPlaces.filter(isShown);
  //     this.filter = filter;
  //   });
  // }

  ngOnDestroy(): void {
    if(this.placesSub){
      this.placesSub.unsubscribe();
    }
  }

}
