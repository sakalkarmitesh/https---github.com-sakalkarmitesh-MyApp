import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from '../app-routing.module';
// import { DashboardModule } from '../dashboard/dashboard.module';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,DashboardModule,FormsModule
  ],
  exports:[
    LoginComponent
  ]
})
export class LoginModule { }
