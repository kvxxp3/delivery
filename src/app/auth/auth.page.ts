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
  user: UserData = {
    id: 0,
    type: 'C',
    email: '',
    psw: 'string',
    userId: 'A'
  };
  userAux: UserData = {
    id: 0,
    type: 'C',
    email: '',
    psw: 'string',
    userId: 'A'
  };
  existeE=false;
  existeU=false;
  msg='a';
  isLogin: boolean;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController, private alertController: AlertController) { }

  async ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(this.userAux.userId, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      type: new FormControl(this.userAux.type, {
        updateOn: 'blur',
        validators: [Validators.required]
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
    this.userAux.type = this.form.value.type;
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
      this.userAux.type = this.form.value.type;
      this.userAux.psw = this.form.value.psw;
      this.userAux.userId = this.form.value.userId;
      console.log('INFO DEL FORM');
      console.log(this.userAux.email, this.form.value.type, this.userAux.psw, this.userAux.userId);

      //si esta para registrarse
      if (this.isLogged) {
        let data = await this.authService.postUserSync(this.userAux.userId, this.userAux.psw, this.userAux.email, this.form.value.type);
        console.log('SE AUTORIZA EL REGISTRO: ' + data);

        if(data == true){ //si las credenciales son correctas
          //busca el id de usuario
          let id = await this.authService.getIDSync(this.userAux.email);
          //guarda el nuevo id en el servicio
          this.authService.updateUserId(id);
          //guarda el nuevo tipo en el servicio
          this.authService.updateUserType(this.form.value.type);
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
  
}
