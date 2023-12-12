import { Injectable } from '@angular/core';
import { Cart } from '../models/carts';
import { BehaviorSubject, Observable } from 'rxjs';
import { Dessert } from '../models/desserts';
import { CartItem } from '../models/cart-Items';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}

  addToCart(dessert:Dessert):void{
    let cartItem = this.cart.items
    .find(item => item.dessert.id === dessert.id);
    if(cartItem)
    return;
      
    this.cart.items.push(new CartItem(dessert));
    this.setCartToLocalStorage();
  }
  removeFromCart(dessertId: number): void {
    this.cart.items = this.cart.items
    .filter(item => item.dessert.id != dessertId)
    this.setCartToLocalStorage();
  }

  changeQuantity(dessertId: number, quantity: number) {
    let cartItem = this.cart.items
    .find(item => item.dessert.id === dessertId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.dessert.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  getCart(): Cart{
    return this.cartSubject.value;
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);

    this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum +currentItem.quantity, 0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new Cart();
  }

}
