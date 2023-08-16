import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() {
  }

  adminAccount: { email: string, password: string } = {
    email: "admin@gmail.com",
    password: "123123"
  }

  account = {
    email: '',
    password: '',
    isLogin: false
  }

  onEmail(email: any): void {
    this.account.email= email.target.value
  }

  onPassword(password: any): void {
    this.account.password = password.target.value
  }



}
