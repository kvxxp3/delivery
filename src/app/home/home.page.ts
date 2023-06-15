import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tipo: any;

  constructor(private authService: AuthService) {
    this.tipo=this.authService.userType;
  }

}
