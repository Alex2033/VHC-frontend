import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public placemarksProperties = [
    {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка',
      iconContent: 'Московский парк'
    },
    {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'А эта — новогодняя',
      iconContent: 'ТРК «РИО»'
    }
  ]

  public placemarksOptions = [
    {
      iconLayout: 'default#imageWithContent',
      iconImageHref: '',
      iconImageSize: [140, 60],
      iconImageOffset: [-20, -60]
    },
    {
      iconLayout: 'default#imageWithContent',
      iconImageHref: '',
      iconImageSize: [186, 60],
      iconImageOffset: [-20, -60]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public loadPlacemarker1(event): void {
    const MyIconContentLayout = event.ymaps.templateLayoutFactory.createClass(
      `
        <div class="marker-container" style="width: 186px;">
          <img src="assets/icons/ico_tree.svg" alt="tree icon">
          <span>$[properties.iconContent]</span>
        </div>
      `
    );

    event.instance.options.set({ iconContentLayout: MyIconContentLayout });
  }

  public loadPlacemarker2(event): void {
    const MyIconContentLayout = event.ymaps.templateLayoutFactory.createClass(
      `
        <div class="marker-container" style="width: 140px;">
          <img src="assets/icons/ico_mall.svg" alt="mall icon">
          <span>$[properties.iconContent]</span>
        </div>
      `
    );

    event.instance.options.set({ iconContentLayout: MyIconContentLayout });
  }

}
