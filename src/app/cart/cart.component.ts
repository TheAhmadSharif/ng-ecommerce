import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products;
  totalAmount:any;
  quantity:Array<number> = [1];
  constructor(public cartService: CartService) {
    
   }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
    this.totalAmount = 0;

    var arr = this.products;
    var total = 0;
    for(var i in arr) { 
      this.totalAmount += parseFloat(arr[i].product_price);
    }

  }

  removeItem(product:number) {
    this.cartService.items.splice(product,1);
    this.ngOnInit();
  }

  addNumber(quantity, price) {
  }
  totalPrice(){
    console.log(this.quantity);
  }
}


