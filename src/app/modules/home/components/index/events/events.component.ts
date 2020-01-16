import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 64
  };

  cards: Array<object> = [
    {
      image: 'assets/images/events/event-1.jpg',
      date:  '25 апреля 2020, 19:00',
      price: 800,
      title: 'Стендап Comedy. Открытый микрофон',
      description: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
    },
    {
      image: 'assets/images/events/event-2.jpg',
      date:  '25 апреля 2020, 19:00',
      price: 800,
      title: 'TED RUSSIA: Моделируя эпоху',
      description: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
    },
    {
      image: 'assets/images/events/event-3.jpg',
      date:  '5 мая 2020 — 10 мая 2020',
      price: 500,
      title: 'Айвазовский. Ожившие полотна',
      description: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
    },
    {
      image: 'assets/images/events/event-2.jpg',
      date:  '25 апреля 2020, 19:00',
      price: 800,
      title: 'TED RUSSIA: Моделируя эпоху',
      description: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
    },
    {
      image: 'assets/images/events/event-1.jpg',
      date:  '25 апреля 2020, 19:00',
      price: 500,
      title: 'Айвазовский. Ожившие полотна',
      description: 'Бухарестская, 28 к1, Кафе «Valo Coffee»'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
