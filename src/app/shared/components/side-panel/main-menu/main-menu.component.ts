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
      url: '/apartments'
    },
    {
      text: 'Акции',
      url: ''
    },
    {
      text: 'Долгосрочная аренда',
      url: ''
    },
    {
      text: 'Услуги и сервисы',
      url: ''
    },
    {
      text: 'Мероприятия',
      url: ''
    },
    {
      text: 'Пространства для бизнеса',
      url: '/business'
    },
    {
      text: 'Доходные программы',
      url: ''
    },
    {
      text: 'Документы',
      url: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  closeMenu() {
    this.close.emit(false);
  }

}
