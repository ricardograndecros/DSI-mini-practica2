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
  table_headers: string[] = ["Photo","Brand","Model","Year","Available_since","Price","PVP"];

  constructor() { }

  ngOnInit(): void {
    product_list.forEach(product => {
      this.products.push(new Product(product.photo, product.brand, product.model, product.year, product.available_since, product.price, product.estado));
    });
  }

  reducePrice(index: number){
    this.products[index].price = this.products[index].price * 0.9;
  }
  deleteProduct(index: number){
    this.products.splice(index, 1);
  }

  sort(colName: string) {
    if (colName == 'brand') this.products.sort((a: Product, b: Product) => a.brand > b.brand ? 1 : a.brand < b.brand ? -1 : 0)
    if (colName == 'model') this.products.sort((a: Product, b: Product) => a.model > b.model ? 1 : a.model < b.model ? -1 : 0)
    if (colName == 'year') this.products.sort((a: Product, b: Product) => a.year > b.year ? 1 : a.year < b.year ? -1 : 0)
    if (colName == 'available_since') this.products.sort((a: Product, b: Product) => a.available_since > b.available_since ? 1 : a.available_since < b.available_since ? -1 : 0)
    if (colName == 'price') this.products.sort((a: Product, b: Product) => a.price > b.price ? 1 : a.price < b.price ? -1 : 0)
  }
}
