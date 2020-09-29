import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/modules/cart/model/cart-item';
import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .then((result) => {
        // console.log(result);
        this.products = result as Product[];
      })
      .catch((e) => console.log(e));
  }

  addToCart(product) {
    let item: CartItem = { productid: product.id, quantity: 1 };
    console.log(item);
    this.productService.addToCart(item)
    .then(result => console.log(result))
    .catch(e => console.log(e));
  }
}
