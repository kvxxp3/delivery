import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { UserData } from '../interfaces/user-data';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  form: FormGroup;
  isLoading = false;
  isLogged = false;
  aprobar: any;
  emailAUX: string = '';
  users: any;
  idDir: any;
  typeAUX: string = '';
  user: UserData = {
    id: 0,
    type: '',
    email: '',
    psw: 'string',
    userId: ''
  };
  userAux: UserData = {
    id: 0,
    type: '',
    email: '',
    psw: 'string',
    userId: ''
  };
  existeE=false;
  existeU=false;
  msg='a';
  isLogin: boolean;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController, private alertController: AlertController) { }

  async ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(this.userAux.userId, {
        updateOn: 'blur'
      }),
      type: new FormControl(this.userAux.type, {
        updateOn: 'blur'
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      psw: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
    this.userAux.email = this.form.value.email;
    this.userAux.type = this.typeAUX;
    this.userAux.psw = this.form.value.psw;
    this.userAux.userId = this.form.value.userId;

    await this.login();
  }

  onSwitch() {
    this.isLogged = !this.isLogged;
    console.log('SE ENCUENTRA EN Signup: ' + this.isLogged);
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Invalid credentials. Try again.',
      buttons: [
        {
          text: 'OK',
          role: 'confirm'
        }
      ],
    });
    await alert.present();
  }

  async login(){
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Loading...'
    }).then(async loadingEl => {
      loadingEl.present();

      this.userAux.email = this.form.value.email;
      this.userAux.type = this.typeAUX;
      this.userAux.psw = this.form.value.psw;
      this.userAux.userId = this.form.value.userId;
      console.log('INFO DEL FORM');
      console.log(this.userAux.email, this.userAux.type, this.userAux.psw, this.userAux.userId);

      //si esta para registrarse
      if (this.isLogged) {
        let data = await this.authService.postUserSync(this.userAux.userId, this.userAux.psw, this.userAux.email, this.userAux.type);
        console.log('SE AUTORIZA EL REGISTRO: ' + data);

        if(data == true){ //si las credenciales son correctas
          //busca el id de usuario
          let id = await this.authService.getIDSync(this.userAux.email);
          //guarda el nuevo id en el servicio
          this.authService.updateUserId(id);
          //guarda el nuevo tipo en el servicio
          this.authService.updateUserType(this.userAux.type);

          //IF el tipo usuario es R da de alta direccion
          // if(this.userAux.type.match('R')){
          //   let dir = await this.authService.postDirSync(this.auxDir.calle, this.auxDir.colonia, this.auxDir.numero, this.auxDir.ref);
          //   console.log('SE REGISTRA LA DIR: ' + dir);
          //   //get id de la dir
          //   this.idDir = await this.authService.getIDDIR(this.auxDir.calle, this.auxDir.numero);
          //   this.authService.updateIDDireccion(this.idDir);
          // }
          // //AMBOS DAN ALTA TARJETA
          // let tarjeta = await this.authService.postTarjetaSync(this.auxTarj.tipo, this.auxTarj.clabe);
          // console.log('SE REGISTRA LA TARJETA: ' + tarjeta);
          // //get id de la dir
          // let idTarj = await this.authService.getIDDIR(this.auxDir.calle, this.auxDir.numero);
          // this.authService.updateIDTarjeta(idTarj);

          // //IF R DA DE ALTA RESTAURANTE
          // if(this.userAux.type.match('R')){
          //   let res = await this.authService.postRestaurantSync(this.auxRes.nombre, this.auxRes.tel, this.auxRes.sucursal, id, this.idDir, idTarj);
          //   console.log('SE REGISTRA EL RESTAURANTE: ' + res);
          // }else{
          //   //ELSE ALTA CLIENTE
          //   let cl = await this.authService.postClienteSync(this.auxCl.nombre, this.auxCl.app, this.auxCl.apm, this.auxCl.tel, id, idTarj);
          //   console.log('SE REGISTRA EL CLIENTE: ' + cl);
          // }          

          //el estado de login cambia a true en el servicio
          this.authService.login();
          //termina loading screen
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/discover']);
          return;

        }else{ //si las credenciales son incorrectas
          loadingEl.dismiss();
          this.form.reset();
          this.presentAlert();
        } 

      //si esta para login
      } else {     
        let data = await this.authService.getUserSync(this.userAux.email, this.userAux.psw);
        console.log('SE AUTORIZA EL LOGIN: ' + data);

        if(data == true){ //si las credenciales son correctas
          //busca el id de usuario
          let id = await this.authService.getIDSync(this.userAux.email);
          //guarda el nuevo id en el servicio
          this.authService.updateUserId(id);
          //busca el tipo de usuario
          let tipo = await this.authService.getTypeSync(id);
          //guarda el nuevo tipo en el servicio
          this.authService.updateUserType(tipo);
          //el estado de login cambia a true en el servicio
          this.authService.login();
          //termina loading screen
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigate(['/home/tabs/discover']);
          return;

        }else{ //si las credenciales son incorrectas
          loadingEl.dismiss();
          this.form.reset();
          this.presentAlert();
        } 
      }
    });
  }

  //Listener del evento del ion-radio-group para obtener el valor del ion-radio seleccionado
  selectedValue($event){
    console.log($event.target.value);
    this.typeAUX = $event.target.value;
  }
  
}
