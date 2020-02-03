import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authentication(username: string, password: string): boolean {
    if (username === "Igor" && password === "Niva") {
      return true;
    }
    return false;
  }
}
