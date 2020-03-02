import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import data from '../../assets/data.json';



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

  constructor(public http: HttpClient, 
    private route: ActivatedRoute,
    private cartService: CartService 
    ) {
      this.parameter = this.route.snapshot.paramMap.get('type');
  }

  
  ngOnInit(): void {
     let parameter = this.parameter;


        this.route.params.subscribe( param =>  this.http.get(`assets/data.json`).subscribe( httpResponse => { 
            this.data = httpResponse;
            this.products = this.data.filter(object => object.category == param['type']); 
            
        }, (err) => { 
           this.products = data.filter(object => object.category == param['type']);
        }));


    }

    addToCart(product:any) {
      this.cartService.addToCart(product);
    }

}
