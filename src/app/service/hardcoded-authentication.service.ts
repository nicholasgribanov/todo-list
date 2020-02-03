import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authentication(username: string, password: string): boolean {
    if (username === "Igor" && password === "Niva") {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    return sessionStorage.getItem('authenticatedUser') !== null;
  }

  loggout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
