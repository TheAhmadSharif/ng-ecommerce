import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

import { Options } from 'ng5-slider';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';


@Component({
  selector: 'app-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  parameter: string;
  data:any;
  title:any;
  products:any;
  searchText:any;
  changePrice:number = 500;


  minValue: number = 0;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  reservedProducts: unknown[];


  constructor(public http: HttpClient, 
    private route: ActivatedRoute,
    private cartService: CartService,
    public firestore: AngularFirestore 
    ) {
      this.parameter = this.route.snapshot.paramMap.get('type');
  }

  
  ngOnInit(): void {
     let parameter = this.parameter;
      this.route.params.subscribe( param => {
                var product_category = param.type;
                this.firestore.collection('Product', ref => ref.where('product_category', '==', product_category)).valueChanges().subscribe(object=> {
                  this.products = object;
                  this.reservedProducts = object;
            
              });

      }); 


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
