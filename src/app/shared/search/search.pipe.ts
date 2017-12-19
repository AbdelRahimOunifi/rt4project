import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../tools/Product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Product[], type: string): Product[] {
    if (!items) {return []; }
    if (!type) {return items; }
    type = type.toLowerCase();
    console.log(type);
    return items.filter( it => {
      return it.productName.toLowerCase().includes(type);
    });
  }

}
