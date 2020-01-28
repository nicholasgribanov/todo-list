import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  handelLogin(): void {
    if (this.username === "Igor" && this.password === "Niva") {
      this.invalidCredentials = false;
      this.router.navigate(['welcome']);
    }
    else {
      this.invalidCredentials = true;
    }
  }

}
