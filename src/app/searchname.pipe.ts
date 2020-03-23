import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchname'
})
export class Searchname implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.product_name.toLowerCase().includes(searchText);
    });
   }
}