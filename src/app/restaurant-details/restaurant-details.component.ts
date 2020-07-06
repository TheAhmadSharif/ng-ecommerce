import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Options } from 'ng5-slider';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  items:any;

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService,
    public db: AngularFireDatabase ) { 

    }

  ngOnInit(): void {
      // this.items = this.db.list('time_table').valueChanges();


      this.items = [];
      this.db.database.ref("time_table").once("value", (response:any) => {
          let data = response.val();

          let list = [];
          this.db.database.ref("restaurant_details").once("value", function(snapshot) {
      



               var childData;
               var childKey;
               let rlist = snapshot.val();



              for(let key in data) {
                       if (data[key]["shop_temp_closing"]) {
                            list.push({
                              "_id": key,
                              "shop_temp_closing": data[key]["shop_temp_closing"],
                              "rid": data[key]["shop_temp_closing"]["rid"],
                              "restauranr_details": rlist["rid_" + data[key]["shop_temp_closing"]["rid"]]
                            })
                         }
                    
                }




          });

          this.items = list;
          console.log(this.items, '32');


          
      })




  }

}