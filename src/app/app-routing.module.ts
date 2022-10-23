import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerDetailsComponent } from './add-customer-details/add-customer-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewCustomerDetailsComponent } from './view-customer-details/view-customer-details.component';

const routes: Routes = [
  {path:'dash-board', component:DashboardComponent},
  {path:'login', component:LoginPageComponent},
  {path:'add-customer', component:AddCustomerDetailsComponent},
  {path:'view-customers', component:ViewCustomerDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
