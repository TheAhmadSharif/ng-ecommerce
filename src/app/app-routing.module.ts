import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CustomerComponent } from './customer/customer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './dashboard/add-product/add-product.component';
import { AddCategoryComponent } from './dashboard/add-category/add-category.component';

import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { ProductListComponent } from './site-layout/product-list/product-list.component';
import { ProductCategoryComponent } from './site-layout/product-category/product-category.component';



import { AuthGuard } from './guard/auth.guard';



const routes: Routes = [
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: ProductListComponent, pathMatch: 'full'},
      { path: 'product/:type', component: ProductCategoryComponent },
      { path: 'cart', component: CartComponent }
    ]
  },
  
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, 
      children: [
        { path: 'add-product', component: AddProductComponent, pathMatch: 'full'},
        { path: 'add-category', component: AddCategoryComponent, pathMatch: 'full'}
      ]
  },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}