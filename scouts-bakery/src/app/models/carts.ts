import { CartItem } from "./cart-Items";

export class Cart{
    items:CartItem[] = [];
    totalPrice:number = 0;
    totalCount:number = 0;
}