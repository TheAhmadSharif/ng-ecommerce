import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { FilterPipe} from './filter.pipe';
import { PricePipe} from './range.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CategoryComponent,
    CartComponent,
    FilterPipe,
    PricePipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }