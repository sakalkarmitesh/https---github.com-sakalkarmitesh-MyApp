import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { View1Component } from './view1.component';
import { AppRoutingModule } from '../../app-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    View1Component
  ],
  imports: [
    CommonModule,AppRoutingModule,MatButtonModule
  ],
  exports:[
    View1Component
  ]
})
export class View1Module { }
