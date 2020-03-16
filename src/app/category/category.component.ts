import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { Options } from 'ng5-slider';

import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  parameter: string;
  data:any;
  title:any;
  products:any;
  searchText:any;
  changePrice:number = 500;

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
              this.firestore.collection('Product', ref => ref.where('product_category', '==', param.type)).valueChanges().subscribe(object=> {
                this.products = object;
          
             });

    }); 


    }

    addToCart(product:any) {
      this.cartService.addToCart(product);
    }

}
