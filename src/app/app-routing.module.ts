import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerComponent } from './customer/customer.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';



const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:type', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'customer', component: CustomerComponent, canActivate: [AngularFireAuthGuard] },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}