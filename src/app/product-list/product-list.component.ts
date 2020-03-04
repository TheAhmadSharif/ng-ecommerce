import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Options } from 'ng5-slider';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
}) 
export class ProductListComponent implements OnInit {
  products: any;
  cart: any;
  searchText:any;
  data;

  minValue: number = 50;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  
    
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService ) { 

    }

  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe(data =>{
      this.products = data;
    });
  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }

  priceRange(min, max) {
    console.log(min, max);
  }

  searchPrice(min, max) {
    if(parseFloat(min) < parseFloat(max)) {


      this.http.get("assets/data.json").subscribe(data =>{
        this.data = data;
        this.products = this.data.filter(object => parseFloat(object.product_price) > parseFloat(min) && parseFloat(object.product_price) < parseFloat(max) + 1); ;
      });

    } else {
      console.log('Wrong combination');
    } 
  }

}
