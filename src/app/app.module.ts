import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';


import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './site-layout/product-list/product-list.component';
import { ProductCategoryComponent } from './site-layout/product-category/product-category.component';

import { CartComponent } from './cart/cart.component';
import { Searchname} from './searchname.pipe';
import { PricePipe} from './range.pipe';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { SigninComponent } from './signin/signin.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryComponent,
    CartComponent,
    Searchname,
    PricePipe,
    SignupComponent,
    CustomerComponent,
    SigninComponent,
    DashboardComponent,
    SiteLayoutComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }