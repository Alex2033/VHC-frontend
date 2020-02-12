import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  screen: string;

  config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    spaceBetween: 140
  };

  icons: Array<object> = [
    { src: 'assets/sprites/icons.svg#ico-subway', width: 41, height: 49},
    { src: 'assets/sprites/icons.svg#ico-location', width: 59, height: 54},
    { src: 'assets/sprites/icons.svg#24', width: 80, height: 28},
    { src: 'assets/sprites/icons.svg#ico-restraurant', width: 46, height: 46},
    { src: 'assets/sprites/icons.svg#ico-bar', width: 43, height: 56},
    { src: 'assets/sprites/icons.svg#ico-wash', width: 56, height: 40},
    { src: 'assets/sprites/icons.svg#ico-parking', width: 47.6, height: 38.43},
  ];

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
