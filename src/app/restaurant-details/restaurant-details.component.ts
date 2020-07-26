import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
<<<<<<< HEAD
=======
import { FormGroup, FormControl } from '@angular/forms';

>>>>>>> 0824bfd0351995018f8d7b728f3d567e87a85eaa
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Options } from 'ng5-slider';
import { AngularFireDatabase } from '@angular/fire/database';
import 'firebase/firestore';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';

>>>>>>> 0824bfd0351995018f8d7b728f3d567e87a85eaa

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
<<<<<<< HEAD
=======
  items:any = [];
  rlist:any;
  reservedLists: any[];
  limit:number = 2;
  btn_visibility:boolean = false;
>>>>>>> 0824bfd0351995018f8d7b728f3d567e87a85eaa

  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private cartService: CartService,
    public db: AngularFireDatabase ) { 

    }

  ngOnInit(): void {
<<<<<<< HEAD
  }

=======

       this.db.database.ref("restaurant_details").once("value", async (snapshot) => {

               var childData;
               var childKey;
               this.rlist = await snapshot.val();


      });


      this.db.database.ref("time_table").once("value", async (response:any) => {
          let data = await response.val();
          let list = [];

                if(data) {
                          for(let key in data) {
                               if (data[key]["shop_temp_closing"]) {
                                    list.push({
                                      "_id": key,
                                      "shop_temp_closing": data[key]["shop_temp_closing"],
                                      "rid": data[key]["shop_temp_closing"]["rid"],
                                      "restaurant_details": this.rlist["rid_" + data[key]["shop_temp_closing"]["rid"]]
                                    })
                                 }
                        }

                           this.reservedLists = list;
                           console.log(list);
                           console.log(this.reservedLists, 'this.reservedLists');

                           if(list.length > this.limit) {
                              this.items = list.slice(0, this.limit);
                              this.btn_visibility = true;
                          }
                          else {
                             this.btn_visibility = false;
                             this.items = list.slice(0,this.limit);
                          }
          
              }   /* End Data */ 

      });

    } /* End ngOnInit */

   update(e:any) {
        this.limit = this.limit + 1;

        if(this.reservedLists.length > this.limit) {
              this.items = this.reservedLists.slice(0, this.limit);
              this.btn_visibility = true;
          }
          else {
             this.btn_visibility = false;
             this.items = this.reservedLists.slice(0, this.limit);
          }
  }




 searchObject(searchText:string) {
        if (searchText === "") {
            this.items = this.reservedLists;
            console.log('Hello');
        }
        console.log(searchText, 'searchText');
        let filterdArray=[];
        if(!this.items) {
            return [];
        }
        if(!searchText) {
          return !this.items;
        }

        searchText = searchText.toLowerCase();
        for(let i=0; i<this.reservedLists.length; i++){

            if(this.reservedLists[i]["restaurant_details"]["name"].toLowerCase().includes(searchText)) {
                filterdArray.push(this.reservedLists[i]);
            } 

        }


        if(filterdArray.length > 0 ){
          this.items = filterdArray;
        } else{
          this.items = this.reservedLists;
        }  

}

>>>>>>> 0824bfd0351995018f8d7b728f3d567e87a85eaa
}
