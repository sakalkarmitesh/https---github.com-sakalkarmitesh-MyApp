import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductEditComponent } from './product-edit.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ProductEditComponent
  ],
  imports: [
    CommonModule,AppRoutingModule,
    MatInputModule,MatButtonModule
  ],
  exports:[
    ProductEditComponent
  ]
})
export class ProductEditModule { }
