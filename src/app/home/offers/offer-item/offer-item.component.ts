import { Component, OnInit, Input } from '@angular/core';
import { Productos } from 'src/app/pruebas/pedido/producto.model';
import { Place } from '../../place.model';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss'],
})
export class OfferItemComponent implements OnInit {
  @Input() offer: Productos;

  constructor() { }

  ngOnInit() {}

  getDummyDate(){
    return new Date();
  }

}
