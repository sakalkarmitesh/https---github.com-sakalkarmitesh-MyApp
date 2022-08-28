import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppComponent } from '../app.component';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,RouterModule
  
  ],
  exports:[
    DashboardComponent

  ],
  
})
export class DashboardModule { }
