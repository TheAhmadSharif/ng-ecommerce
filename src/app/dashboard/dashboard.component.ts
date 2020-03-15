import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage';
import 'firebase/firestore';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  uploadPercent: Observable<number>;
  imagePath: Observable<string>;

  product ={
    name: '',
    price: '',
    category: 'attire'
  }

  constructor(private storage: AngularFireStorage, public firestore: AngularFirestore) { }


  ngOnInit(): void {
  }

  uploadFile(event:any) {
    const file = event.target.files[0];
    const filePath = file.name;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url=>{
            this.imagePath = url;
            console.log(url, 'this.imagePath');
          });
        })
     )
    .subscribe()
  }

  omSubmit(event:any, product:any) {

        var d = new Date().getTime().toString(); 

        this.firestore.collection('Product').doc(d).set({
          _id: d,
          product_name: product.name,
          product_price: product.price,
          product_category: product.category,
          product_img: this.imagePath
      });


        
  }
}
