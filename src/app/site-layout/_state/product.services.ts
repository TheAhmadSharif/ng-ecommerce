import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})

export class ProductListServices {

  constructor(public angularFirestore: AngularFirestore) {}

  getProduct():Observable<any[]> {
  	var data = this.angularFirestore.collection('Product').valueChanges();
  	return data;
  }
  getProductByCategory(product_category:string): Observable<any[]> {
  	var data = this.angularFirestore.collection('Product').valueChanges();
  	return data;
  }

}