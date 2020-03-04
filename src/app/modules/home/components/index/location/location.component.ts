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
      properties: {
        iconContent: 'Московский парк'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.92064640763944, 30.343797602272325],
      icon: 'assets/icons/ico_mall.svg',
      properties: {
        iconContent: 'ТРК «РИО»'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.883118, 30.370153],
      icon: 'assets/icons/ico_mall.svg',
      properties: {
        iconContent: 'ТРК «Континент»'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.868311, 30.349288],
      icon: 'assets/icons/ico_mall.svg',
      properties: {
        iconContent: 'ТРК «Радуга»'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.870081, 30.379458],
      icon: 'assets/icons/ico_mall.svg',
      properties: {
        iconContent: 'ТРК «Международный»'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.877147, 30.358885],
      icon: 'assets/icons/ico_dolphin.svg',
      properties: {
        iconContent: 'Дельфинарий на Фучика'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.875841, 30.357369],
      icon: 'assets/icons/ico_ballons.svg',
      properties: {
        iconContent: 'Всесезонный центр пляжного спорта и активного отдыха'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.865342, 30.340380],
      icon: 'assets/icons/ico_russia.svg',
      properties: {
        iconContent: 'Исторический парк «Россия – моя история»'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.888007, 30.330336],
      icon: 'assets/icons/ico_russia.svg',
      properties: {
        iconContent: 'Град Макет «Россия»'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.863572, 30.363649],
      icon: 'assets/icons/ico_tree.svg',
      properties: {
        iconContent: 'Яблоневый сад'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.892875, 30.321087],
      icon: 'assets/icons/ico_tree.svg',
      properties: {
        iconContent: 'Московский сад'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.858711, 30.401666],
      icon: 'assets/icons/ico_tree.svg',
      properties: {
        iconContent: 'Парк Интернационалистов '
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.883415, 30.370153],
      icon: 'assets/icons/ico_ballons.svg',
      properties: {
        iconContent: 'Парк развлечений MAZA PARK'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.876435, 30.369086],
      icon: 'assets/icons/ico_mall.svg',
      properties: {
        iconContent: 'Парк развлечений MAZA PARK'
      },
      options: {
        balloonOffset: [40, 0],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    },
    {
      position: [59.917946, 30.355571],
      icon: 'assets/images/header/logo.svg',
      logo: 'marker-logo',
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
        <div class="marker-container `+ pin.logo + `" style="width: 186px;">
          <img src="` + pin.icon + `" alt="tree icon">
          <span>$[properties.iconContent]</span>
        </div>
      `
    );

    event.instance.options.set({ iconContentLayout: MyIconContentLayout });
  }

}
