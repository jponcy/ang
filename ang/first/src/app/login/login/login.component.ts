import { Component, OnInit, Output } from '@angular/core';
import { LoginApiService } from '../login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: LoginApiService) { }

  private data: {[key: string]: string} = {};

  error = false;

  ngOnInit() {
    console.log('Init', {data: this.data});
  }

  submitLogin(event: Event) {
    event.preventDefault();

    this.api
      .login(this.data.login, this.data.password)
      .subscribe((v) => this.error = !v);
  }

  change(target: any) {
    this.data[target.name] = target.value;
  }
}
