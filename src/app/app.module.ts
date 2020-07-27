import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Material */
import { MatSliderModule } from '@angular/material/slider';
import  {MatSelectModule } from '@angular/material/select';


import { Ng5SliderModule } from 'ng5-slider';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

/* State Manegement */
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductListReducer, metaReducers } from './site-layout/_state/product.reducers'; 
import { ProductListEffects } from './site-layout/_state/product.effects'; 


import { AngularFireDatabaseModule } from '@angular/fire/database';


import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './site-layout/product-list/product-list.component';
import { ProductCategoryComponent } from './site-layout/product-category/product-category.component';

import { CartComponent } from './cart/cart.component';
import { Searchname} from './searchname.pipe';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './dashboard/product/product.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { UserComponent } from './dashboard/user/user.component';
import { ShippingComponent } from './dashboard/shipping/shipping.component';

import { ContactComponent } from './contact/contact.component';
import { NopageComponent } from './nopage/nopage.component';

import { CustomerComponent } from './customer/customer.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryComponent,
    CartComponent,
    Searchname,
    SignupComponent,
    CustomerComponent,
    SigninComponent,
    DashboardComponent,
    SiteLayoutComponent,
    ProductComponent,
    CategoryComponent,
    ContactComponent,
    NopageComponent,
    UserComponent,
    ShippingComponent,
    RestaurantDetailsComponent,
    SponsorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatSliderModule, 
    MatSelectModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    EffectsModule.forRoot([ProductListEffects]),
    StoreModule.forRoot({
      products: ProductListReducer
    }, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: environment.production, // Restrict extension to log-only mode

    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
