import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userisAuth = true;
  //no se si deba quitar el private
  private idUser = 'abc';
  private type = 'C';
  //FALTA CREAR METODOS PARA REGISTRO, GUARDAR DATA DE USUARIOS Y VALIDAR LOGIN

  constructor(private http: HttpClient) {}

  //NEW
  getUserByEmail(email: string): Observable<UserData>{
    return this.http.get<UserData>(`${environment.apiURL}/users/?email=${email}`);
  }

  listUsers(): Observable<UserData>{
    return this.http.get<UserData>(`${environment.apiURL}/users`);
  }

  newUser(user: UserData): Observable<UserData>{
    return this.http.post<UserData>(`${environment.apiURL}/users`, user);
  }

  updateUserId(id: string){
    this.idUser=id;
    console.log("NUEVO USUARIO LOGEADO: "+this.idUser);
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

  login(){
    this.userisAuth = true;
  }

  logout(){
    this.userisAuth = false;
  }

}
