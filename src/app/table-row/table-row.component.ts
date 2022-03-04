import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() product: any;

  constructor(){}

  ngOnInit(): void {
  }

  reducePrice(){
    this.product.price = this.product.price * 0.9;
  }
  

}
