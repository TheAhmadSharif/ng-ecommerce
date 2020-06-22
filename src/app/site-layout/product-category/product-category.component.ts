import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

import { Options } from 'ng5-slider';

import { Store, select, createSelector  } from '@ngrx/store';
import { getProducts, loadProducts } from '../_state/product.actions';

import * as _ from 'lodash';



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


  constructor(
    public store: Store,
    private route: ActivatedRoute,
    private cartService: CartService,
    ) {
      this.parameter = this.route.snapshot.paramMap.get('type');
  }

  
  ngOnInit(): void {
      let parameter = this.parameter;
      this.store.dispatch(getProducts());
      this.store.pipe(select((state: any) => {
        console.log(state, 'state');

        let data = state.products.filter((o:any) => {
                      return o.product_category == this.parameter;
                  });
        return data;
      })).subscribe((object:any) => {
            this.products = object;
            this.reservedProducts = object;
      });


     /* this.route.params.subscribe( param => {
                this.store.dispatch(getProducts());
                var product_category = param.type;
                console.log(product_category, '52');
                
                this.store.pipe(select((state: any) => {
                  console.log(state, 'state55');
                  let data = state.products.filter((o:any) => {
                      return o.product_category == product_category;
                  })
                  return data;
                })).subscribe((object:any) => {
                      this.products = object;
                      this.reservedProducts = object;
                });

      }); */

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