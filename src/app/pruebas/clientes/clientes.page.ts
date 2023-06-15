import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage {
  listClientes: Clientes[] = [];

  constructor(private clientesService: ClientesService) {
    this.listarTodos();
   }

  listarTodos(): void{
    this.clientesService.getClientes().subscribe(
      (res) => {
        //variable para guardar la conversion de datos json a string
        const listString = JSON.stringify(res);
        //concatena los datos que se reciben uno a uno en listString en el arreglo ListCoor
        this.listClientes = JSON.parse(listString);
      },
      (e) => {
        console.log('ERROR: ' + e);
      }
    );
  }

}
