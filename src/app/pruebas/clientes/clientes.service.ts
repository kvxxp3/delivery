import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  public getClientes(){
    return this.http.get<Clientes>(`${environment.apiURL}/clientes`);
  }

}
