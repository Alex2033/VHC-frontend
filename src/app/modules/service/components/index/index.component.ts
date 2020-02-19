import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import {ServiceGroup} from '../../../../shared/contracts/service-group';
import {ActivatedRoute} from '@angular/router';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent, {static: true}) componentRef?: PerfectScrollbarComponent;
  screen: string;
  groups: ServiceGroup[];

  config: SwiperConfigInterface = {
    slidesPerView: 'auto'
  };

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.groups = this.route.snapshot.data['service_groups'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;

      if (screen === 'md' || screen === 'lg' || screen === 'xl') {
        this.config.spaceBetween = 32;
      } else {
        this.config.spaceBetween = 16;
        this.config.pagination = {
          el: '.services-pagination',
          type: 'bullets',
        }
      }
    });
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }
  getChar(index) {
    return String.fromCharCode(65 + index);
  }
}