import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CustomerComponent } from './customer/customer.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './dashboard/product/product.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { UserComponent } from './dashboard/user/user.component';
import { ShippingComponent } from './dashboard/shipping/shipping.component';

import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { ProductListComponent } from './site-layout/product-list/product-list.component';
import { ProductCategoryComponent } from './site-layout/product-category/product-category.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { NopageComponent } from './nopage/nopage.component';




const routes: Routes = [
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: ProductListComponent, pathMatch: 'full'},
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent, pathMatch: 'full'},
      { path: 'product/:type', component: ProductCategoryComponent }
    ]
  },
  
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'restaurant', component: RestaurantDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent, 
      children: [
        { path: 'user', component: UserComponent, pathMatch: 'full'},
        { path: 'add-product', component: ProductComponent, pathMatch: 'full'},
        { path: 'add-category', component: CategoryComponent, pathMatch: 'full'}
        
      ]
  },
  { path: 'customer', component: CustomerComponent },
  { path: '**', component: NopageComponent}
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}