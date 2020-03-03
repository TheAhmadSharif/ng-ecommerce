import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'range'
})
export class PricePipe implements PipeTransform {
  transform(items: any[], searchText: any): any[] {
    if(!items) return [];
    if(!searchText) return items;
    // searchText = parseInt(searchText);
return items.filter( it => {
      let priceCompare = parseInt(searchText);
      let price = parseInt(it.product_price);
      return price < priceCompare;

    });
   }
}