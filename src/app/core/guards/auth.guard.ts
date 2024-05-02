import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { of } from "rxjs";

export const AuthGuard : CanActivateFn | CanActivateChildFn = (route,state) =>
{
    const router: Router = inject(Router);
    
    //subscribe to the required authservice and check for validity of the user.
    //return inject(AuthService) etc

    return of(true);
}