import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  tipo: any;

  constructor(private authService: AuthService, private router: Router) {
    this.tipo = this.authService.userType;
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }
}
