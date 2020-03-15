import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  product ={
    name: '',
    price: '',
    category: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
