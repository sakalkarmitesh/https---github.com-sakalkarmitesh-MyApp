import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './Employee/delete/delete.component';
import { EmployeeComponent } from './Employee/employee.component';
import { LoginComponent } from './login/login.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './Profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { View1Component } from './Employee/view1/view1.component';
import { ViewComponent } from './Employee/view/view.component';

// const routes: Routes = [];
const routes:Routes=[
  
  {path:'register', component:SignUpComponent},
  {path:'product', component:ProductComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'view/:id', component:ViewComponent},
  {path:'view1/:id', component:View1Component},
  
  {path:'dashboard',component:DashboardComponent},
  
  {path:'delete/:id',component:DeleteComponent},
  {path:'create',component:CreateProductComponent},
  {path:'product-view/:code',component:ProductViewComponent},
  {path:'product-edit/:code',component:ProductEditComponent},
  {path:'', component:LoginComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
