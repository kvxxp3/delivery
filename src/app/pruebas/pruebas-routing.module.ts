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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebasPageRoutingModule {}
