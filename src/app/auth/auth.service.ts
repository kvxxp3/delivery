import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userisAuth = true;
  private idUser = 'abc';
  //FALTA CREAR METODOS PARA REGISTRO, GUARDAR DATA DE USUARIOS Y VALIDAR LOGIN

  constructor() {}

  get userIsAuth(){
    return this.userisAuth;
  }

  get userId(){
    return this.idUser;
  }

  login(){
    this.userisAuth = true;
  }

  logout(){
    this.userisAuth = false;
  }

}
