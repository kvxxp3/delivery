import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogged = true;

  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: 'Logging in...' })
      .then(loadingEL => {
        loadingEL.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEL.dismiss();
          this.router.navigateByUrl('/home/tabs/discover');
        }, 1500);
      });
    this.authService.login();
    setTimeout(() => {
      this.router.navigateByUrl('/home/tabs/discover');
    }, 1500);
  }

  onSwitch(){
    this.isLogged = !this.isLogged;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const psw = form.value.psw;
    console.log(email, psw);

    if(this.isLogged){
      //request login
    }else{
      //request sign up
    }
  }

}
