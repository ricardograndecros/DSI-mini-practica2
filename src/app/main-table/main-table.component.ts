import { Component, Input, OnInit } from '@angular/core';
import { Product, product_list, SearchElement } from '../product';
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
  searchValue: SearchElement= new SearchElement();
  searchMode: string = "Simple";
  maxprice: number = 230000;
  prueba=""
  table_headers: string[] = ["Photo","Brand","Model","Year","Available_since","Price","PVP"];

  constructor() { }

  ngOnInit(): void {
    product_list.forEach(product => {
      this.products.push(new Product(product.photo, product.brand, product.model, product.year, product.available_since, product.price, product.estado));
    });
  }

  reducePrice(index: number){
    this.products[index].price = this.products[index].price * 0.9;
    console.log(this.searchValue.brand)
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

  setSearch(){
    if (this.searchMode == "Simple"){
      this.searchMode="Advanced"
      document.getElementById("fotoflecha")?.setAttribute('src', "assets/images/icons8-flecha-contraer-32.png")
    } else{
      this.searchMode="Simple"
      document.getElementById("fotoflecha")?.setAttribute('src', "assets/images/icons8-flecha-ampliar-32.png")
    }
  }

  getProducts(){
    /*
    if(!this.products && !this.searchValue.brand && !this.searchValue.model && this.searchValue.year==0){
      return this.products;
    }
    
    let productsfilter = this.products

    if(this.searchValue.brand){
      productsfilter.filter(product =>
        product.brand.toLocaleLowerCase().includes(this.searchValue.brand.toLocaleLowerCase())
      )
    }

    if(this.searchValue.model){
      productsfilter.filter(product =>
        product.model.toLocaleLowerCase().includes(this.searchValue.brand.toLocaleLowerCase())
      )
    }

    if(this.searchValue.year!=0){
      productsfilter.filter(product =>
        product.year==this.searchValue.year)
    }
    
    return productsfilter;*/
    if(!this.products || !this.prueba){
      return this.products;
    }

    return this.products.filter(product =>
        //Cambiar para que devuelva solo si empieza
        product.brand.toLocaleLowerCase().includes(this.prueba.toLocaleLowerCase())
      )
  }
}
