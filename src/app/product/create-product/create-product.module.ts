import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [CreateProductComponent],
  imports: [
    CommonModule,AppRoutingModule,MatTableModule,MatInputModule,MatButtonModule,FormsModule,
    ReactiveFormsModule,MatSelectModule
  ],
  exports:[CreateProductComponent]

  
})
export class CreateProductModule { }
