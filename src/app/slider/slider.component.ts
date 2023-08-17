import { Component, OnInit } from '@angular/core';
import { ApiContentService } from '../api-content.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  categories: any[] = [];

  constructor (private apiCall: ApiContentService) {}

  ngOnInit(): void {
      this.getCategories();
  }

  getCategories(): void {
    this.apiCall.getData().subscribe({
      next: (res) => {
        this.categories = res.data.category.frontPage;
      }
    })
  }
}


