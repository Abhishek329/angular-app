import { Routes } from "@angular/router";
import { CustomerManagementComponent } from "./customer-management.component";
import { SalesOrderComponent } from "./sales-order/sales-order.component";
import { DownloadInvoiceComponent } from "./download-invoice/download-invoice.component";

export default[
    {
        path:'',
        component:CustomerManagementComponent,
        resolve:{
            //Resolver goes here
        },
        children:[
                {
                    path:'sales-order',
                    component:SalesOrderComponent
                    
                },
                {
                    path:'download-invoice',
                    component:DownloadInvoiceComponent
                }
        ]    
    }
] as Routes;