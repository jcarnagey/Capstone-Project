import { Injectable } from '@angular/core';
import { Dessert } from '../models/desserts';
import { desserts, sample_tags } from '../../dessert-data';
import { Tags } from '../models/tags';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DESSERT_BY_ID_URL, DESSERT_BY_SEARCH_URL, DESSERT_BY_TAG_URL, DESSERT_TAGS_URL, DESSERT_URL } from '../models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class DessertService {

  constructor(private http:HttpClient) { }
  // Get all dessert from desserts-data.ts
  getAll(): Observable<Dessert[] >{
    return this.http.get<Dessert[]>(DESSERT_URL);
  }

  // search functionality
  searchedDessert(searchTerm:string){
    return this.http.get<Dessert[]>(DESSERT_BY_SEARCH_URL + searchTerm) 
  }

  getAllTags():Observable <Tags[]> {
    return this.http.get<Tags[]>(DESSERT_TAGS_URL);
  }

  getAllDessertTags(tag:string):Observable <Dessert[]> {
    return tag == "All"?
    this.getAll():
    this.http.get<Dessert[]>(DESSERT_BY_TAG_URL + tag);
  }

  getDessertById(dessertId:number):Observable <Dessert> {
    return this.http.get<Dessert>(DESSERT_BY_ID_URL + dessertId);
  }
}
