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
        balloonContent: 'Это красивая метка',
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
        balloonContent: 'А эта — новогодняя',
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
      position: [59.884368, 30.368321],
      icon: 'assets/images/header/logo.svg',
      properties: {
        balloonContent: 'А эта — новогодняя',
      },
      options: {
        balloonOffset: [40, -20],
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [140, 81],
        iconImageOffset: [-20, -81]
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
        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-back" class="marker-container" style="width: 186px;">
          <img src="` + pin.icon + `" alt="tree icon">
          <span>$[properties.iconContent]</span>
        </div>
      `
    );

    event.instance.options.set({ iconContentLayout: MyIconContentLayout });
  }

}
