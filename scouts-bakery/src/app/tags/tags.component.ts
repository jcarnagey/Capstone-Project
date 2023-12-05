import { Component, OnInit } from '@angular/core';
import { Tags } from '../models/tags';
import { DessertService } from '../services/dessert.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tag?:Tags[];
  constructor(dessertService:DessertService) {
    this.tag = dessertService.getAllTags();
   }

  ngOnInit(): void {

  }
}
