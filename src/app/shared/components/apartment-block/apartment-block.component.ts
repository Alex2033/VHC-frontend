import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import {LongTermRentApartment} from '../../contracts/long-term-rent-apartment';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-apartment-block',
  templateUrl: './apartment-block.component.html',
  styleUrls: ['./apartment-block.component.scss']
})
export class ApartmentBlockComponent implements OnInit {
  index: number = 0;
  config: SwiperConfigInterface = {
    slidesPerView: 1
  };

  @Input() apartment: LongTermRentApartment;

  months: number = 1;

  constructor(public modal: ModalService) { }

  ngOnInit() {
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
    const result = this.apartment.costConditions.find((condition) => {
      if(this.months >= condition.minMonths && (this.months <= condition.maxMonths || condition.maxMonths === null)) {
        return true;
      }
    });
    return result.cost;
  }
}
