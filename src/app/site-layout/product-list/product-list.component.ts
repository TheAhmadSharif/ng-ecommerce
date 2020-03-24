import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Options } from 'ng5-slider';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';


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

  minValue: number = 0;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  reservedProducts: unknown[];
  
    
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService,
    public firestore: AngularFirestore ) { 

    }


    
  ngOnInit(): void {
   
    this.firestore.collection('Product').valueChanges()
      .subscribe(object => {
        this.products = object;        
        this.reservedProducts = object;
    })

  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }


  searchPrice(min:any, max:any) {


    let filterdArray=[]
    for(let i=0;i<this.reservedProducts.length;i++){
      if(this.reservedProducts[i]['product_price'] >= parseFloat(min) && this.reservedProducts[i]['product_price'] <= parseFloat(max)){
        filterdArray.push(this.reservedProducts[i])
      }
    }
    if(filterdArray.length > 0 ){
      this.products = filterdArray;
    }else{
      this.products = this.reservedProducts;
    }

     
  }

}
