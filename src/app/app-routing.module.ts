import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AddProductComponent } from './add-product/add-product.component';



const routes: Routes = [
  { 
    path: '', 
    component: SiteLayoutComponent,
    children: [
      { path: '', component: ProductListComponent, pathMatch: 'full'},
      { path: 'product/:type', component: CategoryComponent },
      { path: 'cart', component: CartComponent }
    ]
  },
  
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent,
      children: [
        { path: 'add-product', component: AddProductComponent, pathMatch: 'full'}
      ]
  },
  { path: 'customer', component: CustomerComponent, canActivate: [AngularFireAuthGuard] },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}