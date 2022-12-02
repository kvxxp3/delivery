import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userisAuth = true;
  private idUser = 'abc';

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
