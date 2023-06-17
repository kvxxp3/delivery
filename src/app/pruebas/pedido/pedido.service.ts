import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/interfaces/pedido';
import { Producto } from 'src/app/interfaces/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  auxPedido: Pedido[];

  constructor(private http: HttpClient) { }

  //toma todos los productos por el id del restaurante
  getProductsByID(id: number): Observable<Producto>{
    return this.http.get<Producto>(`${environment.apiURL}/productos/restaurante/${id}`);
  }
}
