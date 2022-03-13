import { Pipe, PipeTransform } from '@angular/core';
import { Product, SearchElement } from './product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: Product[], brand: string): Product[] {

    
    if(!products && !brand){
      return products;
    }
    return products.filter(product =>
      product.brand.toLocaleLowerCase().includes(brand.toLocaleLowerCase())
    )
  }

}
