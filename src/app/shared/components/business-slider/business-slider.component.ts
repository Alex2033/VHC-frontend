import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-business-slider',
  templateUrl: './business-slider.component.html',
  styleUrls: ['./business-slider.component.scss']
})
export class BusinessSliderComponent implements OnInit {

  @Input() business;

  config: SwiperConfigInterface = {
    slidesPerView: 1
  };

  constructor() { }

  ngOnInit() {
  }

}
