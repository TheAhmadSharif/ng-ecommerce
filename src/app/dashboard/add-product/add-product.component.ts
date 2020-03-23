import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
import 'firebase/firestore';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  uploadPercent: Observable<number>;
  imagePath: Observable<string>;
  notification:any;
  products:any;
  public isCollapsed = true;
  progress:any;
  progressBar:boolean = false;

  product ={
    name: '',
    price: '',
    type: '',
    imgPath: '',
    filename: 'Select a product image',
    quantity: 1,
    category: '',
    options: [],
    action_type: 'Add'
  }

  
  constructor(private storage: AngularFireStorage, 
              public firestore: AngularFirestore,
              private router: Router) { }


  ngOnInit(): void {
        this.firestore.collection('Product').valueChanges()
        .subscribe(object => {
          this.products = object;        
      })


      this.firestore.collection('ProductCategory').valueChanges()
        .subscribe(object => {
          this.product.options = object;  
          this.product.category = this.product.options[1].product_category;   
      })
  }

  removeProduct(id:any) {

    var r = confirm("Are you sure you want to delete this prduct?");
    if (r == true) {
            this.firestore.collection("Product").doc(id).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
    } else {

    }

  }

  editProduct (product:any) {
      console.log(product, 'product');
      this.isCollapsed = false;
      console.log(product, 'id');
      this.product.name = product.product_name;
      this.product.price = product.product_price;
      this.product.category = product.product_category;
      this.product.action_type = 'Edit';
      this.product.imgPath = product.product_img;


      
  }

  updateItem(event:any, product:any) {
  

    if(product.name.length > 5 && product.price > 0 && product.imgPath) {


      this.firestore.collection('Product').doc(product._id).set({
              _id: product._id,
              product_name: product.name,
              product_price: product.price,
              product_category: product.category,
              product_img: product.imgPath,
              product_quantity: product.quantity
        }).then(object => {
            this.notification = 'Product info has been updated successfully';

            setTimeout(a =>  {
              this.router.navigate(['/dashboard/add-product']);
            }, 1500);
            
      })
      .catch(function(error) {
            this.notification = 'Please put product information correctly.';
      });
 } 

 else {
    this.notification = 'Please put product information correctly.';
 }








  }

  removeImage() {
    this.product.imgPath = null;
    this.product.filename = null;
  }

  uploadFile(event:any) {
    this.progressBar = true;
    const file = event.target.files[0];
    const filePath = 'product_image' + '/' + new Date().getTime().toString(); 
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    


    this.product.filename = file.name;
    this.uploadPercent = task.percentageChanges();
    

    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url=>{
            this.product.imgPath = url;
          });
        })
     )
    .subscribe()
  }

  onSubmit(event:any, product:any, action_type:string) {

    console.log(product);


    if(action_type == 'Edit') {
        var d:any = product._id
        console.log(action_type, 'action_type');
    }
    else {
      var d:any = new Date().getTime().toString(); 
      console.log(d, 'action_type');
    }


        

        
      if(product.name.length > 5 && product.price > 0 && product.imgPath) {


            this.firestore.collection('Product').doc(d).set({
                    _id: d,
                    product_name: product.name,
                    product_price: product.price,
                    product_category: product.category,
                    product_img: product.imgPath,
                    product_quantity: product.quantity
              }).then(object => {
                  this.notification = 'Product has been added successfully';

                  setTimeout(a =>  {
                    this.router.navigate(['/']);
                  }, 1500);
                  
            })
            .catch(function(error) {
                  this.notification = 'Please put product information correctly.';
            });
       } 

       else {
          this.notification = 'Please put product information correctly.';
       }

       

        
  }



}
