import { createAction, props } from '@ngrx/store';

export const getProducts = createAction('[product] getProducts')
export const loadProducts = createAction('[product] load products', props<{products: any}>())