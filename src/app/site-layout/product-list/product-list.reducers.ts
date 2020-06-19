import { createReducer, on } from '@ngrx/store';
import { getProducts, loadProducts } from './product-list.actions';


export const initialState = {};

export const ProductListReducer = createReducer(initialState, 
	on(loadProducts, (state, payload) => {
	return payload.products;
}));