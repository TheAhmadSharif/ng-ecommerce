import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products;
  totalAmount:any;
  quantity:Array<number> = [1];
  product_totalprice:any;
  product_price:any = [];

  constructor(public cartService: CartService) {
    
   }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.totalAmount = 0;

    var arr = this.products;
    for(var i in arr) { 
      var product_price = parseFloat(arr[i].product_price) * parseFloat(arr[i].product_quantity);
      this.totalAmount += product_price;
      this.product_price[i] = arr[i].product_price * arr[i].product_quantity;
    }

  }

  removeItem(index:number) {
    this.cartService.items.splice(index, 1);
    this.ngOnInit();
  }

  addNumber(quantity, product_price, index) {
      this.cartService.items[index].product_quantity = quantity;
      this.product_price[index] = (quantity * product_price).toFixed(2);
      this.totalAmount = 0;

      for(var i = 0; i < this.product_price.length; i++) {
        this.totalAmount += parseFloat(this.product_price[i]);
      }

  }
  
}


