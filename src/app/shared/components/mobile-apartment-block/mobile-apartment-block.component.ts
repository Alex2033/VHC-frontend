import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ModalService } from '../../services/modal.service';
import { LongTermRentApartment } from '../../contracts/long-term-rent-apartment';

@Component({
  selector: 'app-mobile-apartment-block',
  templateUrl: './mobile-apartment-block.component.html',
  styleUrls: ['./mobile-apartment-block.component.scss']
})
export class MobileApartmentBlockComponent implements OnInit {
  @Input() content: LongTermRentApartment;
  @Input() pagination;

  index: number = 0;
  months: number = 1;

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

  increaseMonths() {
    this.months += 1;
  }

  decreaseMonths() {
    if (this.months <= 1) {
      return;
    }
    this.months -= 1;
  }

  getCost() {
    const result = this.content.costConditions.find((condition) => {
      if(this.months >= condition.minMonths && (this.months <= condition.maxMonths || condition.maxMonths === null)) {
        return true;
      }
    });
    return result.cost;
  }

}
