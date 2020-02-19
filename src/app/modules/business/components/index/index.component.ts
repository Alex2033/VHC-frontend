import { Component, OnInit } from '@angular/core';
import {BusinessSpace} from '../../../../shared/contracts/business-space';
import {ActivatedRoute} from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  spaces: BusinessSpace[];
  screen: string;
  config: SwiperConfigInterface = {
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.mobile-card-pagination',
      type: 'bullets',
    }
  };
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
  ) { }

  ngOnInit() {
    this.spaces = this.route.snapshot.data['business_spaces'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
