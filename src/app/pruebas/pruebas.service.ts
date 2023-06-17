import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurantes } from '../interfaces/restaurantes';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http: HttpClient) { }

  public getRestaurants(){
    return this.http.get<Restaurantes>(`${environment.apiURL}/restaurantes`);
  }
}
