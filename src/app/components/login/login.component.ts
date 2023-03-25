import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onLogin() {
    console.log('Login');
  }
}
function Ouput() {
  throw new Error('Function not implemented.');
}
