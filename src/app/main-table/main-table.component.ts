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
    if (colName == 'pvp') this.products.sort((a: Product, b: Product) => a.price > b.price ? 1 : a.price < b.price ? -1 : 0)
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

  getYears(){
    let yearsaux: number[] = []
    
    let productaux = this.products
    
    if(this.searchValue.brand){
      productaux = productaux.filter(product =>
        product.brand.toLocaleLowerCase().includes(this.searchValue.brand.toLocaleLowerCase())
      )
    }
    
    productaux.forEach(product => {
      if(yearsaux.indexOf(product.year)==-1){
        yearsaux.push(product.year)
      }
    });
    return yearsaux;
  }
  getModel(){
    let modelsaux: string[]=[]
    let productaux = this.products
    console.log("El modelo apuntado es",this.prueba)
    
    if(this.searchValue.brand!=""){
      productaux = productaux.filter(product =>
        product.brand.toLocaleLowerCase().includes(this.searchValue.brand.toLocaleLowerCase())
      )
    }
    productaux.forEach(product => {
      if(modelsaux.indexOf(product.model)==-1){
        modelsaux.push(product.model)
      }
    });
    return modelsaux
  }
}
