import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe(data =>{
      this.products = data;
    })
  }

}
