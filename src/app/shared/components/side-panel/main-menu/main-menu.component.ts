import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate('250ms', style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate('250ms', style({opacity:0}))
      ])
    ])
  ]
})
export class MainMenuComponent implements OnInit {

  @Output() close: EventEmitter<boolean> = new EventEmitter();

  @Input() showMenu;

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
