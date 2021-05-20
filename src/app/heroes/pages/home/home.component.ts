import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'src/app/auth/pages/interfaces/auth.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
  `]
})
export class HomeComponent{

  get auth():Auth {
    return this.authService.auth;
  }

  constructor( private router:Router,
               private authService:AuthService
    ) { }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['./auth']);
  }

}
