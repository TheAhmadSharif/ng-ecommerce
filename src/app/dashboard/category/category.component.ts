import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  notification:any;
  notifyBlock:boolean = false;
  product = {
    category: ''
  }
  category:any;
  public isCollapsed = true;


  constructor( 
    public firestore: AngularFirestore,
    private router: Router) { }

  ngOnInit(): void {
      this.firestore.collection('ProductCategory').valueChanges()
        .subscribe(object => {
          this.category = object;        
      })
  }

  removeCategory(cat:any) {


    var text: string = 'Are you sure you want to delete ' + cat  + ' category';

    var r = confirm(text);
    if (r == true) {
            this.firestore.collection("ProductCategory").doc(cat).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
    } else {

    }


  }

  onSubmit(event:any, product:any) {
    var d = new Date().getTime().toString(); 

    var category = product.category.toLowerCase();

    if(product.category.length > 2) {
      this.firestore.collection('ProductCategory').doc(category).set({
              _id: d,
              product_category: category,
            
        }).then(object => {
            this.notification = 'Product Category has been added successfully';
            this.product.category = '';

            setTimeout(a =>  {
              this.notification = null;
              this.isCollapsed = true;
            }, 2000);
      })
      .catch(function(error) {
            this.notification = 'Please put Category information correctly.';
      });
 } 


  }

}