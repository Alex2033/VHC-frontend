import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-mobile-business-card',
  templateUrl: './mobile-business-card.component.html',
  styleUrls: ['./mobile-business-card.component.scss']
})
export class MobileBusinessCardComponent implements OnInit {
  @Input() content;
  @Input() pagination;

  config: SwiperConfigInterface = {
    slidesPerView: 1,
    observer: true,
    observeParents: true
  };

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.config.pagination = {
      el: '.' + this.pagination,
      type: 'bullets',
      clickable: true
    };
  }

}
