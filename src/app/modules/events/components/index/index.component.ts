import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';
import { ActivatedRoute } from '@angular/router';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { trigger, transition, animate, style, state } from '@angular/animations';

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
  months = {};
  showFirstScreen: boolean = true;

  constructor(private route: ActivatedRoute, public responsive: ResponsiveService) { }

  ngOnInit() {
    const events = this.route.snapshot.data['events'].sort((a, b) => {
      return a.startedAt - b.startedAt;
    });

    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });

    const currentDate = new Date();
    const currentUnixTime = currentDate.getTime() / 1000;
    events.map(event => {
      let month;
      if(event.startedAt < currentUnixTime) {
        month = currentDate.getMonth();
      } else {
        const date = new Date(event.startedAt * 1000);
        month = date.getMonth();
      }
      if(!this.months[month]) {
        this.months[month] = [];
      }
      this.months[month].push(event);
    });
    console.log(this.months);
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }

  getMonthName(index) {
    const months = [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь'
    ];
    return months[index];
  }

  scrollHandler(evt) {
    if (evt.deltaY > 0) {
      this.showFirstScreen = false;
    }
  }
}
