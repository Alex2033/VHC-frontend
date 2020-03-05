import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  screen: string;

  public pins = [
    {
      position: [59.91310384356382, 30.344218691392978],
      icon: 'assets/icons/ico_tree.svg',
      width: 289,
      properties: {
        iconContent: 'Московский Парк Победы и парк аттракционов «Гагарин Парк»'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.92064640763944, 30.343797602272325],
      icon: 'assets/icons/ico_mall.svg',
      width: 140,
      properties: {
        iconContent: 'ТРК «РИО»',
        balloonContent: 'магазины, кафе и рестораны, кинотеатр, боулинг, семейный парк JOKI JOYA, фитнес-клуб с бассейном, ледовый каток, картинг и экзотический зоопарк'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.882000, 30.370153],
      icon: 'assets/icons/ico_mall.svg',
      width: 180,
      properties: {
        iconContent: 'ТРК «Континент»',
        balloonContent: 'магазины, кафе и рестораны, торговое пространство «Китай Город ЮГ», кинотеатр, ледовый каток'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.868311, 30.349288],
      icon: 'assets/icons/ico_mall.svg',
      width: 155,
      properties: {
        iconContent: 'ТРК «Радуга»',
        balloonContent: 'магазины, кафе и рестораны, город профессий «КидБург», интерактивный музей «ЛабиринтУм», веревочный парк FunГрад и семейный парк JOKI JOYA'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.870081, 30.379458],
      icon: 'assets/icons/ico_mall.svg',
      width: 223,
      properties: {
        iconContent: 'ТРК «Международный»',
        balloonContent: 'магазины, кафе и рестораны, кинотеатр, фитнес-клуб'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.877147, 30.358885],
      icon: 'assets/icons/ico_dolphin.svg',
      width: 236,
      properties: {
        iconContent: 'Дельфинарий на Фучика'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.875841, 30.357369],
      icon: 'assets/icons/ico_ballons.svg',
      width: 270,
      properties: {
        iconContent: 'Всесезонный центр пляжного спорта и активного отдыха'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.865342, 30.340380],
      icon: 'assets/icons/ico_russia.svg',
      width: 230,
      properties: {
        iconContent: 'Исторический парк «Россия – моя история»'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.888007, 30.330336],
      icon: 'assets/icons/ico_russia.svg',
      width: 210,
      properties: {
        iconContent: 'Град Макет «Россия»'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.863572, 30.363649],
      icon: 'assets/icons/ico_tree.svg',
      width: 171,
      properties: {
        iconContent: 'Яблоневый сад'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.892875, 30.321087],
      icon: 'assets/icons/ico_tree.svg',
      width: 177,
      properties: {
        iconContent: 'Московский сад'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.858711, 30.401666],
      icon: 'assets/icons/ico_tree.svg',
      width: 247,
      properties: {
        iconContent: 'Парк Интернационалистов'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.883215, 30.370153],
      icon: 'assets/icons/ico_ballons.svg',
      width: 206,
      properties: {
        iconContent: 'Парк развлечений MAZA PARK'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.876094, 30.368955],
      icon: 'assets/icons/ico_mall.svg',
      width: 250,
      properties: {
        iconContent: 'Центр интерьера и товаров для дома «Кубатура»'
      },
      options: {
        balloonOffset: [0, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.884792, 30.367620],
      icon: 'assets/images/header/logo.svg',
      logo: 'marker-logo',
      width: 140,
      options: {
        balloonOffset: [40, -20],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [140, 81],
        iconImageOffset: [-50, -81]
      }
    }
  ];

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  public loadPin(event, pin): void {
    const MyIconContentLayout = event.ymaps.templateLayoutFactory.createClass(
      `
        <div class="marker-container `+ pin.logo + `" style="min-width: `+ pin.width +`px;">
          <img src="` + pin.icon + `" alt="tree icon">
          <span>$[properties.iconContent]</span>
        </div>
      `
    );

    event.instance.options.set({ iconContentLayout: MyIconContentLayout });
  }

}
