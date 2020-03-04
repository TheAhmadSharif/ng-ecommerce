import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
}) 
export class ProductListComponent implements OnInit {
  products: any;
  cart: any;
  searchText:any;
  minPrice:number;
  maxPrice:number;
  changePrice:number = 500;
  data;
  
    
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

  searchPrice(min, max) {
    if(parseFloat(min) < parseFloat(max)) {


      this.http.get("assets/data.json").subscribe(data =>{
        this.data = data;
        this.products = this.data.filter(object => parseFloat(object.product_price) > parseFloat(min) && parseFloat(object.product_price) < parseFloat(max) + 1); ;
      });

      console.log(min, max)
    } else {
      console.log('Wrong combination');
    } 
  }

}
