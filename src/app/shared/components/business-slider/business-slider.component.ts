import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ModalService } from '../../services/modal.service';
import {BusinessSpace} from '../../contracts/business-space';

@Component({
  selector: 'app-business-slider',
  templateUrl: './business-slider.component.html',
  styleUrls: ['./business-slider.component.scss']
})
export class BusinessSliderComponent implements OnInit {
  index: number = 0;

  @Input() space: BusinessSpace;

  config: SwiperConfigInterface = {
    slidesPerView: 1,
    loop: false
  };

  constructor(public modal: ModalService) { }

  ngOnInit() {
  }

}
