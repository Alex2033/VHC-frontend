import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [
    fadeInOutAnimation(),
  ]
})
export class MainMenuComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  links: Array<object> = [
    {
      text: 'Номера',
      url: 'apartments'
    },
    {
      text: 'Акции',
      url: ''
    },
    {
      text: 'Долгосрочная аренда',
      url: 'rent'
    },
    {
      text: 'Услуги и сервисы',
      url: 'service'
    },
    {
      text: 'Мероприятия',
      url: 'events'
    },
    {
      text: 'Пространства для бизнеса',
      url: 'business'
    },
    {
      text: 'Доходные программы',
      url: ''
    },
    {
      text: 'Документы',
      url: 'docs'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.close.emit(false);
  }

}
