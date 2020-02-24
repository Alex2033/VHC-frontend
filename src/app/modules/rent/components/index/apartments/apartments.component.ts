import { Component, OnInit, Input } from '@angular/core';
import { LongTermRentApartment } from '../../../../../shared/contracts/long-term-rent-apartment';
import { ActivatedRoute } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {
  @Input() apartment: LongTermRentApartment;

  screen: string;
  months: number = 1;

  apartments: LongTermRentApartment[];


  images: Array<string> = [
    'assets/images/apartments/apartment-1.jpg',
    'assets/images/apartments/apartment-2.jpg',
    'assets/images/apartments/apartment-3.jpg',
    'assets/images/apartments/apartment-4.jpg',
  ];

  constructor(
    private route: ActivatedRoute, 
    public responsive: ResponsiveService,
    public modal: ModalService
  ) {
  }

  ngOnInit() {
    this.apartments = this.route.snapshot.data['apartments'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
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

  // getCost() {
  //   const result = this.apartment.costConditions.find((condition) => {
  //     if(this.months >= condition.minMonths && (this.months <= condition.maxMonths || condition.maxMonths === null)) {
  //       return true;
  //     }
  //   });
  //   return result.cost;
  // }

}
