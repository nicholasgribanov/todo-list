import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

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

  constructor(
    private router: Router,
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private basicAuthentication: BasicAuthenticationService) {
  }

  ngOnInit() {
  }

  handelLogin(): void {
    if (this.hardcodedAuthentication.authentication(this.username, this.password)) {
      this.invalidCredentials = false;
      this.router.navigate(['welcome', this.username]);
    }
    else {
      this.invalidCredentials = true;
    }
  }

  handelLoginBasicAuth(): void {

    this.basicAuthentication.executeBasicAuth(this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.invalidCredentials = false;
          this.router.navigate(['welcome', this.username]);
        },
        error => {
          console.log(error);
          this.invalidCredentials = true;

        }
      );
  }

}
