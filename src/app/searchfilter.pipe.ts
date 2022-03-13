import { Pipe, PipeTransform } from '@angular/core';
import { Product, SearchElement } from './product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: Product[], prueba: string): Product[] {
    
    if(!products || !prueba){
      return products;
    }
    return products.filter(product =>
      product.brand.toLocaleLowerCase().includes(prueba.toLocaleLowerCase())
    )
  }
}
