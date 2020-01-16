import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 64
  };

  cards: Array<object> = [
    {
      image: 'assets/images/service/service-1.jpg',
      title: 'Коворкинг'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Ресторан'
    },
    {
      image: 'assets/images/service/service-3.jpg',
      title: 'SPA Салон'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'SPA Салон'
    },
    {
      image: 'assets/images/service/service-3.jpg',
      title: 'SPA Салон'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
