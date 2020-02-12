import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import {DocumentGroup} from '../../../../shared/contracts/document-group';
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

  groups: DocumentGroup[];

  config: SwiperConfigInterface = {
    slidesPerView: 'auto',
    spaceBetween: 32
  };

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.groups = this.route.snapshot.data['document_groups'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }
  
  onScroll() {
    console.log(this.componentRef.directiveRef.position());
  }

  getChar(index) {
    return String.fromCharCode(65 + index);
  }

}
