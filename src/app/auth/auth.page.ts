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
  emailAUX: string = '';
  users: any;
  user: UserData = {
    id: 0,
    email: '',
    psw: 'string',
    userId: 'string'
  };
  userAux: UserData = {
    id: 0,
    email: '',
    psw: 'string',
    userId: 'string'
  };
  existeE=false;
  existeU=false;
  msg='a';
  isLogin: boolean;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController, private alertController: AlertController) { }

  ngOnInit() {
    this.form = new FormGroup({
      userId: new FormControl(this.userAux.userId, {
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
  }

  getUserByEmail(email: string) {
    this.authService.getUserByEmail(email).subscribe(
      (resp: any) => {
        this.user = {
          id: resp[0].id,
          email: resp[0].email,
          psw: resp[0].psw,
          userId: resp[0].userId
        };
      }
    );

    console.log('INFO RECIBIDA');
    console.log('id: ' + this.user.id);
    console.log('email: ' + this.user.email);
    console.log('psw: ' + this.user.psw);
    console.log('userId: ' + this.user.userId);
  }

  async loadUsers(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await loading.present();
    this.authService.listUsers().subscribe(
      (resp) => {
        loading.dismiss();
        const listString = JSON.stringify(resp);
        this.users = JSON.parse(listString);
        for (let i = 0; i < this.users.length; i++) {
          console.log('User email ' + i + ': ' + this.users[i].email);

          if (this.users[i].email === this.userAux.email){
            this.existeE=true;
            console.log('EL CORREO YA EXISTE');
          }else{
            this.existeE=false;
          }
          if (this.users[i].userId === this.userAux.userId){
            this.existeU=true;
            console.log('EL USUARIO YA EXISTE');
          }else{
            this.existeU=false;
          }
        }
        event?.target.complete();
      },
      (err) => {
        console.log(err.message);
        loading.dismiss();
      }
    );
  }

  onLogin() {
    if (!this.form.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Loading...'
    }).then(loadingEl => {
      loadingEl.present();

      this.userAux.email = this.form.value.email;
      this.userAux.psw = this.form.value.psw;
      this.userAux.userId = this.form.value.userId;
      console.log('INFO DEL FORM');
      console.log(this.userAux.email, this.userAux.psw, this.userAux.userId);

      if (this.isLogged) {
        this.loadUsers();
        if (this.existeU || this.existeE) {
          loadingEl.dismiss();
          this.form.reset();
          this.presentAlert();
        } else {
          console.log('creando nuevo usuario');
          //manda userId a service
          this.authService.updateUserId(this.userAux.userId);
          //peticion post
          console.log('****** SE VA A MANDAR *********');
          this.authService.newUser(this.userAux).subscribe(() => {
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/home/tabs/discover']);
          });
        }
      } else {        
        this.loadUsers();
        if(!this.existeU && !this.existeE){
            console.log("SIIIIIU");
            loadingEl.dismiss();
            this.form.reset();
            this.router.navigate(['/home/tabs/discover']);
        }else{
          loadingEl.dismiss();
          this.form.reset();
          console.log("NOOOOOO");
        }        
      }
    });
    
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
  
}
