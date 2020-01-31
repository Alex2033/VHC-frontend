import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  @ViewChild(PerfectScrollbarComponent, {static: true}) componentRef?: PerfectScrollbarComponent;

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

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }

}
