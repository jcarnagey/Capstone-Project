import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dessert } from '../models/desserts';
import { DessertService } from '../services/dessert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
    // injects data from dessert service
  desserts: Dessert[] = [];
  constructor(private dessertService:DessertService, activatedRoute:ActivatedRoute) {
    // subscribe to the params 
    activatedRoute.params.subscribe((params) => {
    // returns filtered result
    if(params.searchTerm)
      this.desserts = this.dessertService.searchedDessert(params.searchTerm);
    else if(params.tag)
      this.desserts = this.dessertService.getAllDessertTags(params.tag);
    else
      this.desserts = dessertService.getAll();
    })
    
  }

  ngOnInit(): void {}
}
