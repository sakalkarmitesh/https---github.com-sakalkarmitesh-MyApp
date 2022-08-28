import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,MatTableModule,MatButtonModule,AppRoutingModule
  ]
})
export class ProductModule { }
