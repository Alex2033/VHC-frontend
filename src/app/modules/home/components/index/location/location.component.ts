import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public pins = [
    {
      position: [59.91310384356382, 30.344218691392978],
      icon: 'assets/icons/ico_tree.svg',
      properties: {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка',
        iconContent: 'Московский парк'
      },
      options: {
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
        hintContent: 'Собственный значок метки с контентом',
        balloonContent: 'А эта — новогодняя',
        iconContent: 'ТРК «РИО»'
      },
      options: {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '',
        iconImageSize: [186, 60],
        iconImageOffset: [-20, -60]
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public loadPin(event, pin): void {
    const MyIconContentLayout = event.ymaps.templateLayoutFactory.createClass(
      `
        <div class="marker-container" style="width: 186px;">
          <img src="` + pin.icon + `" alt="tree icon">
          <span>$[properties.iconContent]</span>
        </div>
      `
    );

    event.instance.options.set({ iconContentLayout: MyIconContentLayout });
  }

}
