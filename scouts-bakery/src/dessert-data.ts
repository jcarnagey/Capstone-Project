import { Dessert } from "./app/models/desserts";
import { Tags } from "./app/models/tags";
        
        // Sample Data

    export const desserts: Dessert[] = [
      {
        id: 1,
        name: "Berries Summer Cupcakes",
        price: 19,
        category:"Cupcakes",
        imageUrl: "assets/desserts/Berries Summer Cupcakes.jpg",
        tags: 'Cupcakes'
      },
      {
        id: 2,
        name: "Cherry Jelly Cheesecake",
        price: 25,
        category: "Cheesecake",
        imageUrl: "assets/desserts/Cherry Jelly Cheesecake.jpg",
        tags: 'Cheesecake'
        
      },
      {
        id: 3,
        name: "Chocolate Blueberries Cake",
        price: 25,
        category:"Cake",
        imageUrl: "assets/desserts/Chocolate Blueberries Cake.jpg",
        tags: 'Cake'
      },
      {
        id: 4,
        name: "Chocolate Bonbons",
        price: 10,
        category:"Treats",
        imageUrl: "assets/desserts/Chocolate Bonbons.jpg",
        tags: 'Treats'
      },
      {
        id: 5,
        name: "Chocolate Cookies",
        price: 10,
        category:"Treats",
        imageUrl: "assets/desserts/Chocolate Cookies.jpg",
        tags: 'Treats'
      },
      {
        id: 6,
        name: "Chocolate Cupcakes",
        price: 19,
        category:"Cupcakes",
        imageUrl: "assets/desserts/Chocolate Cupcake.jpg",
        tags: 'Cupcakes'
      },
      {
        id: 7,
        name: "Chocolate Summer Berries",
        price: 25,
        category:"Cake",
        imageUrl: "assets/desserts/Chocolate Summer Berries.jpg",
        tags: 'Cake'
      },
      {
        id: 8,
        name: "Classic Cheesecake",
        price: 25,
        category:"Cheesecake",
        imageUrl: "assets/desserts/Classic Cheesecake.jpg",
        tags: 'Cheesecake'
      },
      {
        id: 9,
        name: "Cookies Cream Cake",
        price:25,
        category:"Cake",
        imageUrl: "assets/desserts/Cookies Cream Cake.jpg",
        tags: 'Cake'
      },
      {
        id: 10,
        name: "Easter Cupcakes",
        price: 19,
        category:"Cupcakes",
        imageUrl: "assets/desserts/Easter Cupcakes.jpg",
        tags: 'Cupcakes'
      },
      {
        id: 11,
        name: "Fruit Cake",
        price: 25,
        category:"Cake",
        imageUrl: "assets/desserts/Fruit Cake.jpg",
        tags: 'Cake'
      },
      {
        id: 12,
        name: "Monster Theme Cake",
        price: 25,
        category:"Cake",
        imageUrl: "assets/desserts/Monster Theme Cake.jpg",
        tags: 'Cake'
      },
      {
        id: 13,
        name: "Pumpkin Spice Cupcakes",
        price: 19,
        category:"Cupcakes",
        imageUrl: "assets/desserts/Pumpkin Spice Cupcakes.jpg",
        tags: 'Cupcakes'
      }
    ]

    export const sample_tags:Tags[] = [
      {category: 'All', count:13},
      {category: 'Cake', count:5},
      {category: 'Cupcakes', count:4},
      {category: 'Cheesecake', count:2},
      {category: 'Treats', count:2}
    ]