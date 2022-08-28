import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view.component';
import { AppRoutingModule } from '../../app-routing.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,MatButtonModule
  ]
})
export class ProductViewModule { }
