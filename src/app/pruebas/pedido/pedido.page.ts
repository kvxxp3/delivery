import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { Producto } from 'src/app/interfaces/producto';
import { PedidoService } from './pedido.service';
import { Productos } from './producto.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  //se necesita crear todo un modelo con los datos tanto de detalles_pedido como los de pedido y hacer el post de ambas tablas hasta que se complete la compra
  products: Productos[] = [];

  constructor(
    private pedidoService: PedidoService,
    private router: Router) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.getProductsById(this.getIDfromURL());
  }

  getIDfromURL(){
    console.log('entra a funcion get id by url')
    const url = this.router.url;
    const arr = url.split('/', 3);
    const id = parseInt(arr[2],10);
    console.log('el numero en el url es: '+id);
    return id;
  }

  getProductsById(restaurant: number){
    //convertir datos json del servidor a string
    this.pedidoService.getProductsByID(restaurant).subscribe(
      (resp) => {
        const listString = JSON.stringify(resp);
        //lista todos los productos
        this.products = JSON.parse(listString);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onClickItem(i: any){
    this.router.navigate(['/pruebas/pedido/'+i]);
  }

}
