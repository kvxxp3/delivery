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
import { Restaurantes } from '../interfaces/restaurantes';
import { Producto } from '../interfaces/producto';
import { ProductoAdd } from '../interfaces/producto-add';
import { Productos } from '../pruebas/pedido/producto.model';
import { ProductoUpdate } from '../interfaces/producto-update';

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

  productoAux: ProductoAdd = {
    nombre: 'product',
    des: 'string',
    precio: 'string',
    res: 0,
    imagen: 'string'
  }

  productoUpdateAux: ProductoUpdate = {
    nombre: 'product',
    des: 'string',
    precio: 'string',
    imagen: 'string'
  }

  constructor(private authService: AuthService, private http: HttpClient) { }

  //toma todos los productos por el id del restaurante
  getProductsByID(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${environment.apiURL}/productos/restaurante/${id}`);
  }

  //toma un producto por su id
  getProductByID(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${environment.apiURL}/productos/${id}`);
  }

  ////////////////////////////////////////////////

  //addProduct(name: string, desc: string, price: string, rest: number, foto: string): Observable<any>{
  //  return this.http.post<any>(`${environment.apiURL}/producto/add`, {nombre: {name}, des: {desc}, precio: {price}, res: {rest}, imagen: {foto}});
  //}

  addProduct(name: string, desc: string, price: string, rest: number, foto: string): Observable<ProductoAdd>{
    this.productoAux.nombre = name;
    this.productoAux.des = desc;
    this.productoAux.precio = price;
    this.productoAux.res = rest;
    this.productoAux.imagen = foto;
    console.log("OBJETO ANTES DE ENVIAR: " + this.productoAux.res);
    
    return this.http.post<ProductoAdd>(`${environment.apiURL}/producto/add`, this.productoAux);
  }

  deleteProduct(id: number): Observable<Productos>{
    return this.http.delete<Productos>(`${environment.apiURL}/producto/delete/${id}`);
  }

  updateProduct(id: number, name: string, desc: string, price: string, foto: string): Observable<any>{
    this.productoUpdateAux.nombre = name;
    this.productoUpdateAux.des = desc;
    this.productoUpdateAux.precio = price;
    this.productoUpdateAux.imagen = foto;
    console.log("OBJETO ANTES DE ENVIAR: " + this.productoUpdateAux.nombre);
    
    return this.http.put<any>(`${environment.apiURL}/producto/update/${id}`, this.productoUpdateAux);
  }

  ////////////////////////////////////////////////

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
}
