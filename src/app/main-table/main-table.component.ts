import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { Product, product_list } from '../product';
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

}
