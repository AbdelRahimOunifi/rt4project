import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../tools/Product';

@Pipe({
  name: 'idfilter'
})
export class IdfilterPipe implements PipeTransform {
  transform(items: Product[], type: number): Product[] {
    if (!items) {return []; }
    if (!type) {return items; }
    return items.filter( it => {
      return it.productID === type;
    });
  }
}
