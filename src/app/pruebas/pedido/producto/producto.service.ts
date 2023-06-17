import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  auxCantidad: any=0;
  auxPrecioFinal: any=0;
  auxPrecioTotal: any=0;
  auxIdProducto: any=0;

  constructor(private http: HttpClient) { }

  getProductByID(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${environment.apiURL}/productos/${id}`);
  }

  updateAuxCantidad(cantidad: any){
    this.auxCantidad = cantidad;
    console.log("NUEVA CANTIDAD: " + this.auxCantidad);
  }

  updateAuxPrecioFinal(precio: any){
    this.auxPrecioFinal = precio;
    console.log("NUEVO PRECIO FINAL: " + this.auxPrecioFinal);
  }

  updateAuxPrecioTotal(precio: any){
    this.auxPrecioTotal = precio;
    console.log("NUEVO PRECIO TOTAL: " + this.auxPrecioTotal);
  }

  updateIdProducto(id: any){
    this.auxIdProducto = id;
    console.log("NUEVO ID PRODUCTO: " + this.auxIdProducto);
  }

  get precioTotal(){
    return this.auxPrecioTotal;
  }
}
