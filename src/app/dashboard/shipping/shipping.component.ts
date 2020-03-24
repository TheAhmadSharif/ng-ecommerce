import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  products:any;
  totalAmount:any;
  quantity:Array<number> = [1];
  product_totalprice:any;
  product_price:any = [];
  shippingcost:number = 50;
  payable:number;

  constructor(public cartService: CartService) { }

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

}
