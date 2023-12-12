import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Order } from '../../models/order';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css'
})
export class CheckOutComponent implements OnInit{
  order:Order = new Order();
  checkoutForm!: FormGroup;
  constructor(cartService:CartService, private formBuilder: FormBuilder) { 
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
      this.checkoutForm = this.formBuilder.group({

      })
  }
  get fc() {
    return this.checkoutForm.controls;
  }

}
