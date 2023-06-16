import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userisAuth = false;
  //no se si deba quitar el private
  private idUser = 'abc';
  private type = 'C';
  aux: any;
  //FALTA CREAR METODOS PARA REGISTRO, GUARDAR DATA DE USUARIOS Y VALIDAR LOGIN

  constructor(private http: HttpClient) {
    this.aux = '';
  }
  
  //APP DELIVERY
  //login
  getUser(correo: string, contra: string){
    return this.http.get(`${environment.apiURL}/login/${correo}/${contra}`);
  }

  getUserSync(correo: string, contra: string): Promise<any>{
    return this.getUser(correo, contra).toPromise();
  }

  getID(correo: string){
    return this.http.get(`${environment.apiURL}/usuario/correo/${correo}`);
  }

  getIDSync(correo: string): Promise<any>{
    return this.getID(correo).toPromise();
  }

  getType(id: number){
    return this.http.get(`${environment.apiURL}/usuario/id/${id}`);
  }

  getTypeSync(id: number): Promise<any>{
    return this.getType(id).toPromise();
  }

  login(){
    this.userisAuth = true;
  }

  logout(){
    this.userisAuth = false;
  }

  updateUserId(id: string){
    this.idUser=id;
    console.log("NUEVO USUARIO LOGEADO: "+this.idUser);
  }

  updateUserType(tipo: string){
    this.type=tipo;
    console.log("NUEVO TIPO LOGEADO: "+this.type);
  }

  get userIsAuth(){
    return this.userisAuth;
  }

  get userId(){
    return this.idUser;
  }

  get userType(){
    return this.type;
  }

  //signup
  postUser(nombre: string, contra: string, correo: string, tipo: string){
    return this.http.post(`${environment.apiURL}/register/${nombre}/${contra}/${correo}/${tipo}`, nombre);
  }

  postUserSync(nombre: string, contra: string, correo: string, tipo: string): Promise<any>{
    return this.postUser(nombre, contra, correo, tipo).toPromise();
  }

}
