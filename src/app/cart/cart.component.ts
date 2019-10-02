import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private FormBuilder: FormBuilder,
  ) {
      this.items = this.cartService.getItems();

      this.checkoutForm = this.FormBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

}