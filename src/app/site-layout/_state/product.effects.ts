import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

import { Store, Action } from '@ngrx/store';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';

import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';
import { EMPTY, of, Observable,  } from 'rxjs';

import { getProducts, loadProducts } from './product.actions';
import { ProductListServices } from './product.services';

@Injectable() 
export class ProductListEffects {
	constructor(
		private actions$: Actions,
		private productListServices: ProductListServices
		) {}


		loadProducts$: Observable<any> = createEffect(() => 
			this.actions$.pipe(
				ofType(getProducts),
				mergeMap(() => this.productListServices.getProduct()
					.pipe(
					map(products => {
						return ({type: '[product] load products', products: products})
					}),
					catchError(() => EMPTY)

				)
			))
		)
}