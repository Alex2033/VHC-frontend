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
      image: 'assets/images/service/service-2.jpg',
      title: 'Ресторан с банкетным залом'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Кафе и бары'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Фитнес-клуб'
    },
    {
      image: 'assets/images/service/service-3.jpg',
      title: 'Бассейн и SPA'
    },
    {
      image: 'assets/images/service/service-3.jpg',
      title: 'Химчистка'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Прачечная'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Конференц-зал'
    },
    {
      image: 'assets/images/service/service-1.jpg',
      title: 'Коворкинг'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Консьерж-служба'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Хранение багажа'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Служба клининга'
    },
    {
      image: 'assets/images/service/service-2.jpg',
      title: 'Room Service'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
