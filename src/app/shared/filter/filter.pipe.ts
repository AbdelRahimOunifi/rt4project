import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../tools/Product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Product[], type: string): Product[] {
    if (!items) {return []; }
    if (!type) {return items; }
    type = type.toLowerCase();
    return items.filter( it => {
      return it.productType.toLowerCase().includes(type);
    });
  }

}
