import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidCredentials = false;

  constructor() {
  }

  ngOnInit() {
  }

  handelLogin(): void {
    this.invalidCredentials = !(this.username === "Igor" && this.password === "Niva");
  }

}
