import { inject } from "@angular/core";
import { CanActivateChildFn, CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";
import { of } from "rxjs";

export const NoAuthGuard : CanActivateFn | CanActivateChildFn = (route,state) =>
{
    const router: Router = inject(Router);


    return of(true);
}