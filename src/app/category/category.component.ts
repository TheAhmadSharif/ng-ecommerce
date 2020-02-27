import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import data from '../data.json';
import {environment} from '../../environments/environment';
const host = environment.apiHost;


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  parameter: string;
  data:any;
  title:any;

  constructor(public http: HttpClient, private route: ActivatedRoute) {
      this.parameter = this.route.snapshot.paramMap.get('type');
  }

  
  ngOnInit(): void {
     let parameter = this.parameter;

     console.log(parameter);

     this.title = parameter['type'];
     let refineData = data.filter(object => object.category == parameter);
     this.data = refineData;
       
     }


}
