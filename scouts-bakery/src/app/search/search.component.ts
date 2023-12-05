import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute, private router:Router)// private = access throughout class
  {
    activatedRoute.params.subscribe((params) => {
      // read data from the route
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
  }

  ngOnInit(): void{

  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }
}
