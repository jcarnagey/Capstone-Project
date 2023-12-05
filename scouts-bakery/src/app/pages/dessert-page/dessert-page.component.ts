import { Component, OnInit } from '@angular/core';
import { Dessert } from '../../models/desserts';
import { ActivatedRoute, Router } from '@angular/router';
import { DessertService } from '../../services/dessert.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dessert-page',
  templateUrl: './dessert-page.component.html',
  styleUrl: './dessert-page.component.css'
})
export class DessertPageComponent implements OnInit {
  dessert!: Dessert;
   constructor(activatedRoute:ActivatedRoute, dessertService:DessertService,
    private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.dessert = dessertService.getDessertById(params.id);
    })
   }

   ngOnInit(): void {
       
   }

   addToCart(){
    this.cartService.addToCart(this.dessert);
    this.router.navigateByUrl('/cart-page');
   }
}
