import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-apartment-slider',
  templateUrl: './apartment-slider.component.html',
  styleUrls: ['./apartment-slider.component.scss']
})
export class ApartmentSliderComponent implements OnInit {

  index: number = 0;

  @Input() apartment;

  config: SwiperConfigInterface = {
    slidesPerView: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
