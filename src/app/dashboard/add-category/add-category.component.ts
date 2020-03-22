import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

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

    var txt:any;
    var r = confirm("Press a button!");
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