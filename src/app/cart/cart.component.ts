import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products;
  quantity:Array<number> = [];
  constructor(public cartService: CartService) {
    
   }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

  removeItem(product:number) {
    this.cartService.items.splice(product,1);
  }

}


