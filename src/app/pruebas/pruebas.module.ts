import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebasPageRoutingModule } from './pruebas-routing.module';

import { PruebasPage } from './pruebas.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    PruebasPageRoutingModule
  ],
  declarations: [PruebasPage]
})
export class PruebasPageModule {}
