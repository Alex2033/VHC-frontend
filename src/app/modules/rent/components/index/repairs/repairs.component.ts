import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {ApartmentEquipmentElement} from '../../../../../shared/contracts/apartment-equipment-element';
import {ActivatedRoute} from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {

  config: SwiperConfigInterface = {
    slidesPerView: 3,
    spaceBetween: 64
  };

  cards: ApartmentEquipmentElement[];

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) {
  }

  ngOnInit() {
    this.cards = this.route.snapshot.data['apartment_equipment'];

    this.responsive.screen.subscribe((screen) => {
      if (screen === 'md') {
        this.config.spaceBetween = 32;
        this.config.slidesPerView = 'auto';
      }
    });
  }

}
