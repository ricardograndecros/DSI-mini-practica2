import { Component, OnInit } from '@angular/core';
import { Product, product_list } from '../product';
import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es'
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  product_list = product_list;
  products: Product[] = [];


  constructor() { }

  ngOnInit(): void {
    product_list.forEach(product => {
      this.products.push(new Product(product.photo, product.brand, product.model, product.year, product.available_since, product.price));
    });
  }

  reducePrice(index: number){
    this.products[index].price = this.products[index].price * 0.9;
  }
  deleteProduct(index: number){
    this.products.splice(index, 1);
  }
}
