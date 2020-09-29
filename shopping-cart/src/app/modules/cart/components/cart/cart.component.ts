import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from '../../model/cart-item';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];
  empty = true;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService
      .getCart()
      .then((result) => {
        this.cart = result as CartItem[];
        if (this.cart.length > 0) {
          this.empty = false;
        }
        // console.log(this.cart);
      })
      .catch((e) => console.log(e));
  }

  removeItem(item) {
    // console.log(item_id);
    this.cart = this.cart.filter((i) => i.productid != item.productid);
    this.cartService
      .deleteItem(item.id)
      .then((result) => console.log(result))
      .catch((e) => console.log(e));
  }
}
