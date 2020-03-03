import { Component, OnInit } from '@angular/core';
import { SlideRight } from 'src/app/shared/animations/slide-right.animation';
import { MenuService } from 'src/app/shared/services/menu.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
  animations: [
    SlideRight(450),

    trigger("fadeUp", [
      transition(":enter", [
        style({
          opacity: 0,
          transform: 'translateY(50px)'
        }),
        animate(
          '350ms 200ms',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          })
        )
      ]),
      transition(":leave", [
        animate(
          '150ms',
          style({
            opacity: 0,
            transform: 'translateY(0)'
          })
        )
      ])
    ]),

    trigger('showImage', [
      state('show', style({
        opacity: 1,
        zIndex: 1
      })),
      state('hide', style({
        opacity: 0,
        zIndex: -500
      })),
      transition('show => hide', [
        animate('300ms')
      ]),
      transition('hide => show', [
        animate('300ms')
      ]),
    ]),
  ]
})
export class MainMenuComponent implements OnInit {

  screen: string;
  activeItem: number;

  images: Array<string> = [
    'assets/images/menu/bitmap.jpg',
    'assets/images/pages/apartment/room.jpg',
    'assets/images/pages/business/business-1.jpg',
    'assets/images/pages/business/business-2.jpg',
    'assets/images/pages/rent/first-screen/bitmap.jpg',
    'assets/images/pages/business/business-1.jpg',
    'assets/images/pages/apartment/room.jpg'
  ];

  links: Array<object> = [
    {
      text: 'Номера',
      url: 'apartments'
    },
    // {
    //   text: 'Акции',
    //   url: ''
    // },
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
      text: 'Документы',
      url: 'docs'
    }
  ];

  constructor(public menu: MenuService, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  closeMenu() {
    this.menu.showMenu = false;
  }

  clickItem() {
    this.menu.showMenu = false;
    this.activeItem = -1;
  }

}
