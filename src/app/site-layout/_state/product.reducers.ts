import { createReducer, on, StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { getProducts, loadProducts } from './product.actions';


export const initialState = {};

export const ProductListReducer = createReducer(initialState, 
	on(loadProducts, (state, payload) => {
	return payload.products;
}));

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    console.group(action.type);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, state);
    console.groupEnd();
    
 
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<any>[] = [debug];