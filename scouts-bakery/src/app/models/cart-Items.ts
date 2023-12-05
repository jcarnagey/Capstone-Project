import { Dessert } from "./desserts";

export class CartItem{
    constructor(public dessert:Dessert){ }
    quantity: number = 1;
    price: number = this.dessert.price;
}