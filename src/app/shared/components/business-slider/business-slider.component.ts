import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-business-slider',
  templateUrl: './business-slider.component.html',
  styleUrls: ['./business-slider.component.scss']
})
export class BusinessSliderComponent implements OnInit {
  index: number = 0;

  @Input() business;

  config: SwiperConfigInterface = {
    slidesPerView: 1
  };

  constructor(public modal: ModalService) { }

  ngOnInit() {
  }

}
