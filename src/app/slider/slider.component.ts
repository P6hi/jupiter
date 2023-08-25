import { Component, Renderer2 } from '@angular/core';
import { ApiContentService } from '../api-content.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  categories: any[] = [];
  incrementValues: { [key: number]: number } = {};

  constructor(private apiCall: ApiContentService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.apiCall.getData().subscribe({
      next: (res) => {
        this.categories = res.data.category.frontPage;
        this.categories.forEach((category, index) => {
          this.incrementValues[index] = 0;
        });
      }
    });
  }

 moveLeft(categoryIndex: number): void {
  if (this.incrementValues[categoryIndex] > 0) {
    this.incrementValues[categoryIndex]--;
    this.updateSliderTransform(categoryIndex);
  }
}

moveRight(categoryIndex: number): void {
  const category = this.categories[categoryIndex];
  const totalSlides: number = Math.ceil(category.data.length / 6); // Replace with logic that calculates the width of images instead of "6"
  if (this.incrementValues[categoryIndex] < totalSlides) {
    this.incrementValues[categoryIndex]++;
    this.updateSliderTransform(categoryIndex);
    console.log(totalSlides)
    console.log(this.incrementValues[categoryIndex])
  }
}


  private updateSliderTransform(categoryIndex: number): void {
    const transformValue = `translateX(${ -90 * this.incrementValues[categoryIndex] }%)`;
    const sliderElement = document.getElementById(`slider-${categoryIndex}`);
    this.renderer.setStyle(sliderElement, 'transform', transformValue);
  }
}
