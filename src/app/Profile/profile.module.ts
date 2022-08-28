import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../Profile/profile.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,AppRoutingModule
  ]
})
export class ProfileModule { }
