import { Routes } from "@angular/router";
import { VendorManagementComponent } from "./vendor-management.component";
import { VendorCreationComponent } from "./vendor-creation/vendor-creation.component";
import { VendorApprovalComponent } from "./vendor-approval/vendor-approval.component";
import { QuotationComponent } from "./quotation/quotation.component";
import { QuotationStatusComponent } from "./quotation-status/quotation-status.component";
import { VendorLedgerComponent } from "./vendor-ledger/vendor-ledger.component";





export default[
    {
        path:'',
        component:VendorManagementComponent,
        resolve:{
            //Resolver goes here
        },
        children:[
                {
                    path:'vendor-creation',
                    component:VendorCreationComponent
                    
                },
                {
                    path:'vendor-approval',
                    component:VendorApprovalComponent
                },
                {
                    path:'quotation',
                    component:QuotationComponent    
                },
                {
                    path:'quotation-status',
                    component:QuotationStatusComponent
                },
                {
                    path:'vendor-ledger',
                    component:VendorLedgerComponent
                }
        ]    
    }
] as Routes;