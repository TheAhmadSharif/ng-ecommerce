import { Component, OnInit } from '@angular/core';
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

  product ={
    name: '',
    price: '',
    type: '',
    imgPath: '',
    filename: '',
    quantity: 1,
    category: 'Attire',
    options: ['Attire', 'Watch', 'Shoes']
  }

  
  constructor(private storage: AngularFireStorage, public firestore: AngularFirestore) { }


  ngOnInit(): void {
  }

  removeImage() {
    this.product.imgPath = null;
    this.product.filename = null;
  }

  uploadFile(event:any) {
    const file = event.target.files[0];
    const filePath = 'product_image' + '/' + new Date().getTime().toString(); 
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    console.log(file.name, 'filename');

    this.product.filename = file.name;
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url=>{
            this.product.imgPath = url;
            console.log(url, 'this.product.imgPath');
          });
        })
     )
    .subscribe()
  }

  omSubmit(event:any, product:any) {

    console.log(product);

        var d = new Date().getTime().toString(); 

      /*  if(product) {
            this.firestore.collection('Product').doc(d).set({
              _id: d,
              product_name: product.name,
              product_price: product.price,
              product_category: product.category,
              product_img: this.imagePath,
              product_quantity: product.quantity
          });
       } */


        
  }



}
