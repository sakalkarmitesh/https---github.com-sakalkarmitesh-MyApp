import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { Routes,RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListService } from './services/employeeList.service';
import {MatTableModule} from '@angular/material/table';
// import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeModule } from './Employee/employee.module';

import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { View1Module } from './Employee/view1/view1.module';
// import { DeleteModule } from './delete/delete.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProDataService } from './services/product-data.service';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { CreateProductComponent } from './product/create-product/create-product.component';
import { CreateProductModule } from './product/create-product/create-product.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductViewModule } from './product/product-view/product-view.module';
import { ProductEditModule } from './product/product-edit/product-edit.module';
import {MatSelectModule} from '@angular/material/select';

// import { DeleteDialogComponent } from './delete/deleteDialog/delete-dialog/delete-dialog.component';
// import { DeleteDialogComponent } from './delete/deleteDialog/delete-dialog.component';

// import { ViewModule } from './view/view.module';
// import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    // DeleteDialogComponent,
    // EmployeeComponent,
    // SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    DashboardModule,
    SignUpModule,
    // RouterModule.forRoot(appRoute),
    HttpClientInMemoryWebApiModule.forRoot(ProDataService),
    BrowserAnimationsModule,
    MatTableModule,
    EmployeeModule,
    MatDialogModule,View1Module,ProductModule,HttpClientModule,
    MatButtonModule,CreateProductModule,ReactiveFormsModule,
    ProductViewModule,ProductEditModule,MatSelectModule

  ],

  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
