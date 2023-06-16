import { Injectable } from '@angular/core';
import { Pedido } from 'src/app/interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  auxPedido: Pedido[];

  constructor() { }
}
