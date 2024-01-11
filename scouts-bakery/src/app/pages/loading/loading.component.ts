import { Component, OnInit } from '@angular/core';
import { LoadingServiceTsService } from '../../services/loading.service.ts.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {

  isLoading!: boolean;
  constructor(loadingServiceTsService:LoadingServiceTsService) {
    loadingServiceTsService.isLoading.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });

  }

  ngOnInit(): void {
      
  }
}
