import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurantes } from '../interfaces/restaurantes';
import { PruebasService } from './pruebas.service';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.page.html',
  styleUrls: ['./pruebas.page.scss'],
})
export class PruebasPage{
  listRestaurants: Restaurantes[] = [];

  constructor(private pruebasService: PruebasService, private router: Router) { 
    this.listarRestaurantes();
  }

  listarRestaurantes(): void{
    this.pruebasService.getRestaurants().subscribe(
      (res) => {
        //variable para guardar la conversion de datos json a string
        const listString = JSON.stringify(res);
        //concatena los datos que se reciben uno a uno en listString en el arreglo ListCoor
        this.listRestaurants = JSON.parse(listString);
      },
      (e) => {
        console.log('ERROR: ' + e);
      }
    );
  }

  onClickItem(i: any){
    this.router.navigate(['/pruebas/'+i]);
  }

}