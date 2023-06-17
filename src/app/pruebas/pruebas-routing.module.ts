import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebasPage } from './pruebas.page';

const routes: Routes = [
  {
    path: '',
    component: PruebasPage
  },
  {
    path: 'clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'pedido',
    children: [
      {
        path: ':productId',
        loadChildren: () => import('./pedido/producto/producto.module').then( m=>m.ProductoPageModule)
      }
    ]
    },
    // {
    //   path: ':restaurantId',
    //   loadChildren: () => import('./pedido/pedido.module').then( m=>m.PedidoPageModule)
    // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebasPageRoutingModule {}
