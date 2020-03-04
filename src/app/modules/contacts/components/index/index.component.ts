import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  socials: Array<object> = [
    {
      text: 'youtube',
      url: 'https://www.youtube.com/channel/UCb4dNVnZr7CIqdMLZIcmkIw'
    },
    {
      text: 'vkontakte',
      url: 'https://vk.com/valohotelcity'
    },
    {
      text: 'instagram',
      url: 'https://www.instagram.com/valohotelcity/'
    },
  ];

  public pins = [
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

  constructor() { }

  ngOnInit() {
  }

  public loadPin(event, pin): void {
    const MyIconContentLayout = event.ymaps.templateLayoutFactory.createClass(
      `
        <div data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out-back" class="marker-container marker-logo" style="width: 140px;">
          <img src="` + pin.icon + `" alt="tree icon">
          <span>$[properties.iconContent]</span>
        </div>
      `
    );

    event.instance.options.set({ iconContentLayout: MyIconContentLayout });
  }

}
