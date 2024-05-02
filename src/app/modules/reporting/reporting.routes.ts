import { Routes } from "@angular/router";
import { ReportingComponent } from "./reporting.component";
import { Report1Component } from "./report1/report1.component";



export default[
    {
        path:'',
        component:ReportingComponent,
        resolve:{
            //Resolver goes here
        },
        children:[
                {
                    path:'report1',
                    component:Report1Component     
                }
               
        ]    
    }
] as Routes;