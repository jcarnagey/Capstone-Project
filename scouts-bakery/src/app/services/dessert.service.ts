import { Injectable } from '@angular/core';
import { Dessert } from '../models/desserts';
import { desserts, sample_tags } from '../../dessert-data';
import { Tags } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor() { }
  // Get all dessert from desserts-data.ts
  getAll():Dessert[]{
    return desserts;
  }

  // search functionality
  searchedDessert(searchTerm:string){
    return this.getAll().filter(desserts => 
    desserts.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tags[]{
    return sample_tags;
  }

  getAllDessertTags(tag:string):Dessert[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(desserts => desserts.tags?.includes(tag));
  }

  getDessertById(dessertId:number):Dessert{
    return this.getAll().find(dessert => dessert.id == dessertId) ?? new Dessert();
  }
}
