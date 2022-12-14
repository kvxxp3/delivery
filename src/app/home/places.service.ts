/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';
import { take, map, tap, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlacesData } from '../interfaces/places-data';
import { PlaceData } from '../interfaces/place-data';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  //PAST PROJECT
  private placess = new BehaviorSubject<Place[]>([
    new Place(
      'ORIGINAL1',
      'Villamartin Mansion',
      'Mediterranean style villa.',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuc2lvbnxlbnwwfHwwfHw%3D&auto',
      249.99,
      new Date('2023-01-01'),
      new Date('2023-09-01'),
      'abc'
    ),
    new Place(
      'ORIGINAL2',
      'Killarney Mansion',
      "His majesty's manor",
      'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto',
      399.99,
      new Date('2023-04-01'),
      new Date('2023-04-28'),
      'abc'
    ),
    new Place(
      'ORIGINAL3',
      'Ciudad Maderas Mansion',
      'One of the best places to stay in Mexico',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto',
      159.99,
      new Date('2023-06-24'),
      new Date('2023-12-31'),
      'abc'
    )
  ]);

  constructor(private authService: AuthService, private http: HttpClient) { }

  //PAST PROJECT
  get places() {
    return this.placess.asObservable();
  }

  getPlace(id: string) {
    return this.places.pipe(take(1), map(places => ({ ...places.find(p => p.id === id) }))
    );
  }

  //NEW
  listPlaces(): Observable<PlacesData>{
    return this.http.get<PlacesData>(`${environment.apiURL}/places`);
  }

  getPlaceById(id: number): Observable<PlacesData>{
    return this.http.get<PlacesData>(`${environment.apiURL}/places/?id=${id}`);
  }

  newPlace(newPlace: PlaceData): Observable<PlaceData>{
    return this.http.post<PlaceData>(`${environment.apiURL}/places`, newPlace);
  }

  updatePlace(place: any): Observable<PlacesData>{
    return this.http.put<PlacesData>(`${environment.apiURL}/places/${place.id}`, place);
  }

  deletePlace(id: number): Observable<PlacesData>{
    return this.http.delete<PlacesData>(`${environment.apiURL}/places/${id}`);
  }

  addPlace(title: string, description: string, price: number, from: Date, to: Date) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto',
      price,
      from,
      to,
      this.authService.userId
    );
    return this.places.pipe(take(1), delay(1000), tap(places => {
      this.placess.next(places.concat(newPlace));
    })
    );
  }

  // updatePlace(placeId: string, title: string, description: string) {
  //   return this.placess.pipe(take(1), delay(1000), tap(places => {
  //     const updatedIndex = places.findIndex(p => p.id === placeId);
  //     const updatedPlace = [...places];
  //     const old = updatedPlace[updatedIndex];
  //     updatedPlace[updatedIndex] = new Place(
  //       old.id,
  //       title,
  //       description,
  //       old.imageURL,
  //       old.price,
  //       old.availableFrom,
  //       old.availableTo,
  //       old.userId
  //       );
  //       this.placess.next(updatedPlace);
  //   }));
  // }
}
