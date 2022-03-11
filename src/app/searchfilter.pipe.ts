import { Pipe, PipeTransform } from '@angular/core';
import { Product, SearchElement } from './product';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(products: Product[], searchValue: string): Product[] {

    /*
    if(searchValue.brand=="" && searchValue.model=="" && searchValue.year==0){
      console.log("Im here")
      return products;
    }
  

    if(searchValue.brand){
      console.log("Filtering by bra")
      products.filter(product =>
        product.brand.toLocaleLowerCase().includes(searchValue.brand.toLocaleLowerCase())
      )
    }

    if(searchValue.model){
      console.log("Filtering by model")
      products.filter(product =>
        product.model.toLocaleLowerCase().includes(searchValue.brand.toLocaleLowerCase())
      )
    }

    if(searchValue.year!=0){
      console.log("Filtering by bra")
      products.filter(product =>
        product.year==searchValue.year)
    }*/
    if(!products || !searchValue){
      return products;
    }

    return products.filter(product =>
        //Cambiar para que devuelva solo si empieza
        product.brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      )
  }
}
