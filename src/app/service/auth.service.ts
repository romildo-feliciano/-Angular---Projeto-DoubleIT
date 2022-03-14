import { User } from './../shared/user/user';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loginResponse: User = new User();

  clear(): void{
    this.loginResponse.token = '';
  }

  isAuthenticated():boolean{
    return Boolean(this.loginResponse.token && this.loginResponse.token != '')
  }

}
