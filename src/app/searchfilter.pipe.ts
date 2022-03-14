import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Pipe, PipeTransform } from '@angular/core';
import { Product, SearchElement } from './product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: Product[], brand: string, model:string, year: string): Product[] {
    
    if(!products || (!brand&&!model&&!year)){
      return products;
    }
    return products.filter(product =>
      product.brand.toLocaleLowerCase().includes(brand.toLocaleLowerCase())&&
      product.model.toLocaleLowerCase().includes(model.toLocaleLowerCase())&&
      product.year.toString().includes(year.toLocaleLowerCase())
    )
  }
}
