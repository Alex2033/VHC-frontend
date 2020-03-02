import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ServiceGroup } from '../../../../shared/contracts/service-group';
import { ActivatedRoute } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  animations: [
    trigger('fadeOut', [
      transition(':leave', [   // :leave is alias to '* => void'
        animate('450ms', style({opacity:0}))
      ])
    ]),
    trigger('fadeIn', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', [
        animate('450ms')
      ]),
      transition('hide => show', [
        animate('450ms')
      ]),
    ]),
  ]
})
export class IndexComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent, {static: true}) componentRef?: PerfectScrollbarComponent;
  screen: string;
  showFirstScreen: boolean = true;
  groups: ServiceGroup[];

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    this.groups = this.route.snapshot.data['service_groups'];

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

  scrollHandler(evt) {
    if (evt.deltaY > 0) {
      this.showFirstScreen = false;
    }
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }
  getChar(index) {
    return String.fromCharCode(65 + index);
  }
}