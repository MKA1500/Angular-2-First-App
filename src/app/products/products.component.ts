import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone',
      price: 650
    },
    {
      id: 2,
      name: 'iPad',
      price: 850
    },
    {
      id: 3,
      name: 'MacBook',
      price: 850
    }
  ]

  selectedProduct: Product

  constructor() { }

  onSelectProduct(product) {
    this.selectedProduct = product
  }

  ngOnInit() {
    this.selectedProduct = this.products[0]
  }

}
