import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { routes } from "../app.routes";



export default[
    {
        path:'',
        component:AuthComponent,
        resolve:{
            //Resolver goes here
        },
        children:[
                {
                    path:'sign-in',
                    component:SignInComponent
                    
                },
                {
                    path:'sign-up',
                    component:SignUpComponent
                }
        ]    
    }
] as Routes;