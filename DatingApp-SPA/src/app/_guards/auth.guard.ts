import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AlertiryService } from "../_services/alertiry.service";
import { AuthService } from "../_services/auth.service";

@Injectable({
  providedIn: "root",
})
/*export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}*/
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertiryService
  ) {}

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true;
    }
    this.alertify.error('You shall not pass!');
    this.router.navigate(['/home']);
    return false;
  }
}
