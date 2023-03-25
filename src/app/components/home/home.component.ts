import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogoutClick() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  get isLogged() {
    return this.authService.isLogged();
  }
}
