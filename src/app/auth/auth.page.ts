import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { UserData } from '../interfaces/user-data';
import { AuthService } from './auth.service';
import { ModalController } from '@ionic/angular';
import { AccountModalComponent } from '../shared/account-modal/account-modal.component';
import { Clientes } from '../interfaces/clientes';
import { Restaurantes } from '../interfaces/restaurantes';
import { Tarjeta } from '../interfaces/tarjeta';
import { Direccion } from '../interfaces/direccion';

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
  idTarj: any;
  idGlobal: any;
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

  auxCl: Clientes = {
    id: '',
    name: '',
    app: '',
    apm: '',
    number: '',
    user: '',
    card: ''
  };

  auxRes: Restaurantes = {
    id: '',
    name: '',
    number: '',
    branch: '',
    user: '',
    dir: '',
    card: ''
  };

  auxTarj: Tarjeta = {
    id: '',
    type: '',
    clabe: ''
  };

  auxDir: Direccion = {
    id: '',
    calle: '',
    district: '',
    number: '',
    reference: ''
  };

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController, private alertController: AlertController, private modalCtrl: ModalController) { }

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
          this.idGlobal = id;
          //el estado de login cambia a true en el servicio
          this.authService.login();
          //termina loading screen
          loadingEl.dismiss();
          this.form.reset();
          //this.openModal();
          //this.darAltaUser();

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

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AccountModalComponent,
    }).then((modal) => {
      modal.present();
      return modal.onDidDismiss();
    })
    .then(resultData => {
      if (resultData.role === 'confirm') {
        this.loadingCtrl.create({
          message: 'Creating user...'
        }).then(loadingEl => {
          loadingEl.present();
          
          const data = resultData.data.userData;
          console.log(data);
          if(data.usuario == 'C'){
            
          }else if(data.usuario == 'R'){
            
          }
          
        });
      }
    });
  }

  // darAltaUser(){
  //   if(this.userAux.type == 'C'){
  //           this.auxCl.name = "Paola";
  //           this.auxCl.app = "Alba";
  //           this.auxCl.apm = "Bugarin";
  //           this.auxCl.number = "4494140663";
  //           this.auxTarj.type = 'D';
  //           this.auxTarj.clabe = "1234567890";
  //   }
  //   if(this.userAux.type == 'R'){

  //           this.auxRes.name = "Michiladas";
  //           this.auxRes.number = "4491234567";
  //           this.auxRes.branch = "Norte";
  //           this.auxDir.calle = "Av. Universidad";
  //           this.auxDir.district = "Fatima";
  //           this.auxDir.number = "102";
  //           this.auxDir.reference = "Junto a la UAA";
  //           this.auxTarj.type = "C";
  //           this.auxTarj.clabe = "1109876543";
  //   }
  //   //IF el tipo usuario es R da de alta direccion
  //   if(this.userAux.type == 'R'){
  //     //let dir = 
  //     this.authService.postDirSync(this.auxDir.calle, this.auxDir.district, Number(this.auxDir.number), this.auxDir.reference);
  //     //console.log('SE REGISTRA LA DIR: ' + dir);
  //     //get id de la dir
  //     this.idDir = this.authService.getIDDIR(this.auxDir.calle, Number(this.auxDir.number));
  //     this.authService.updateIDDireccion(this.idDir);
  //   }
  //   //AMBOS DAN ALTA TARJETA
  //   //let tarjeta = 
  //   this.authService.postTarjetaSync(this.auxTarj.type, this.auxTarj.clabe);
  //   console.log('SE REGISTRA LA TARJETA: ' );
  //   //get id de la dir
  //   this.idTarj = this.authService.getIDDIR(this.auxDir.calle, Number(this.auxDir.number));
  //   this.authService.updateIDTarjeta(this.idTarj);

  //   //IF R DA DE ALTA RESTAURANTE
  //   if(this.userAux.type == 'R'){
  //     //let res = 
  //     //this.authService.postRestaurantSync(this.auxRes.name, this.auxRes.number, this.auxRes.branch, this.idGlobal, this.idDir, this.idTarj);
  //     this.authService.postRestaurant(this.auxRes.name, this.auxRes.number, this.auxRes.branch, this.idGlobal, this.idDir, this.idTarj);
      
  //     //console.log('SE REGISTRA EL RESTAURANTE: ' + res);
  //   }else{
  //     //ELSE ALTA CLIENTE
  //     ///let cl = 
  //     //this.authService.postClienteSync(this.auxCl.name, this.auxCl.app, this.auxCl.apm, this.auxCl.number, this.idGlobal, this.idTarj);
  //     this.authService.postCliente(this.auxCl.name, this.auxCl.app, this.auxCl.apm, this.auxCl.number, this.idGlobal, this.idTarj);
  //     //console.log('SE REGISTRA EL CLIENTE: ' + cl);
  //  }  
  // }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  
}
