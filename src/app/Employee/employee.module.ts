import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';

import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from '../app-routing.module';
import { DeleteComponent } from './delete/delete.component';
import { DeleteDialogComponent } from './delete/delete-dialog/delete-dialog.component';
import { ViewComponent } from './view/view.component';
import {MatInputModule} from '@angular/material/input';

import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './view/dialog/dialog.component';


@NgModule({
  declarations: [EmployeeComponent,DeleteComponent,DeleteDialogComponent,ViewComponent,DialogComponent],
  imports: [
    CommonModule,MatTableModule,AppRoutingModule,MatInputModule,MatButtonModule
  ]
})
export class EmployeeModule { }
