import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { NoAuthGuard } from './core/guards/noAuth.guard';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Route[] = [

    //authentication routes for guests and members
    {
        path:'',
        canActivate:[NoAuthGuard],
        canActivateChild:[NoAuthGuard],
        component:AppComponent,
        children:[
            {path: 'auth',loadChildren: () => import('./auth/auth.routes')}            
        ]        
    },
    
    //Auth route for authenticated users
    {
      path :'',
      component:AppComponent,
      canActivate:[AuthGuard],
      canActivateChild:[AuthGuard],
      children:[
        {
            path:'vendor-management', loadChildren: () => import('./modules/vendor-management/vendor-management.routes')
        },
        {
            path:'customer-management',loadChildren: () => import('./modules/customer-management/customer-management.routes')
        },
        {
            path:'reporting',loadChildren: () => import('./modules/reporting/reporting.routes')
        }

      ]

    }

];
