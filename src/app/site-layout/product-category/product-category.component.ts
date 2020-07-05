import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';

import { Observable, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';


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
  products$:any;
  searchText:any;
  changePrice:number = 500;
  state = {
    products: []
  }


  minValue: number = 0;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: 250
  };
  reservedProducts;


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


            this.route.params.subscribe( param => {
                  console.log(param, '58');
                  this.store.pipe(map((state:any) => {
                    return state.products;
                  }), map(x => 
                      x.filter(x=> x.product_category == param.type)
                    )).subscribe((object:any) => {
                            this.products$ = object;
                            this.reservedProducts = object;
                      });
      
            }); 
     

}

    addToCart(product:any) {
      this.cartService.addToCart(product);
    }


    searchPrice(min:any, max:any) {
     
    
    }
}