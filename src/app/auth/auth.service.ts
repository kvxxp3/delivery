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
  private idUser = 'abc';
  private type = 'C';
  private tarjeta = '';
  private dir = 'C';
  aux: any;

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

  //REGISTRO
  postUser(nombre: string, contra: string, correo: string, tipo: string){
    return this.http.post(`${environment.apiURL}/register/${nombre}/${contra}/${correo}/${tipo}`, nombre);
  }

  postUserSync(nombre: string, contra: string, correo: string, tipo: string): Promise<any>{
    return this.postUser(nombre, contra, correo, tipo).toPromise();
  }

  //ALTA TARJETA
  postTarjeta(tipo: string, clabe: string){
    return this.http.post(`${environment.apiURL}/altaTarjeta/${tipo}/${clabe}`, tipo);
  }

  postTarjetaSync(tipo: string, clabe: string): Promise<any>{
    return this.postTarjeta(tipo, clabe).toPromise();
  }

  //get id tarjeta
  getIDTarjeta(tipo: string, clabe: string){
    return this.http.get(`${environment.apiURL}/tarjeta/getID/${tipo}/${clabe}`);
  }

  getIDTarjetaSync(tipo: string, clabe: string): Promise<any>{
    return this.getIDTarjeta(tipo, clabe).toPromise();
  }

  updateIDTarjeta(tipo: string){
    this.tarjeta=tipo;
    console.log("NUEVO TARJETA LOGEADO: "+this.tarjeta);
  }

  //ALTA DIRECCION
  postDir(calle: string, colonia: string, numero: number, ref: string){
    return this.http.post(`${environment.apiURL}/altaDir/${calle}/${colonia}/${numero}/${ref}`, calle);
  }

  postDirSync(calle: string, colonia: string, numero: number, ref: string): Promise<any>{
    return this.postDir(calle, colonia, numero, ref).toPromise();
  }

  //get id dir por la calle y numero
  getIDDIR(calle: string, numero: number){
    return this.http.get(`${environment.apiURL}/dir/getID/${calle}/${numero}`);
  }

  updateIDDireccion(tipo: string){
    this.dir=tipo;
    console.log("NUEVO DIR LOGEADO: "+this.dir);
  }

  getIDDirSync(calle: string, numero: number): Promise<any>{
    return this.getIDDIR(calle, numero).toPromise();
  }

  //ALTA CLIENTE
  postCliente(nombre: string, app: string, apm: string, tel: string, usuario: number, tarjeta: number){
    return this.http.post(`${environment.apiURL}/altaCliente/${nombre}/${app}/${apm}/${tel}/${usuario}/${tarjeta}`, nombre);
  }

  postClienteSync(nombre: string, app: string, apm: string, tel: string, usuario: number, tarjeta: number): Promise<any>{
    return this.postCliente(nombre, app, apm, tel, usuario, tarjeta).toPromise();
  }

  //ALTA RESTAURANTE
  postRestaurant(nombre: string, tel: string, sucursal: string, usuario: number, dir: number, tarjeta: number){
    return this.http.post(`${environment.apiURL}/altaRestaurante/${nombre}/${tel}/${sucursal}/${usuario}/${dir}/${tarjeta}`, nombre);
  }

  postRestaurantSync(nombre: string, tel: string, sucursal: string, usuario: number, dir: number, tarjeta: number): Promise<any>{
    return this.postRestaurant(nombre, tel, sucursal, usuario, dir, tarjeta).toPromise();
  }

}
