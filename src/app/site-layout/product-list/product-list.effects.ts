import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { Store, Action } from '@ngrx/store';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';

import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { EMPTY, of, Observable,  } from 'rxjs';

import { getProducts, loadProducts } from './product-list.actions';
import { ProductListServices } from './product-list.services';

@Injectable() 
export class ProductListEffects {
	constructor(
		private acations$: Actions,
		private productListServices: ProductListServices
		) {}


		loadProducts$: Observable<any> = createEffect(() => 
			this.acations$.pipe(
				ofType(getProducts),
				mergeMap(() => this.productListServices.getProduct()
					.pipe(
					map (products => {
						return ({type: '[product] loadProducts', products: products})
					}),
					catchError(() => EMPTY)

				)
			))
		)
}