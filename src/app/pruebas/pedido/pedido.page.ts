import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  //se necesita crear todo un modelo con los datos tanto de detalles_pedido como los de pedido y hacer el post de ambas tablas hasta que se complete la compra

  constructor() { }

  ngOnInit() {
  }

}
