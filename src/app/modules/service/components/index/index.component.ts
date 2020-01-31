import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarComponent } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  @ViewChild(PerfectScrollbarComponent, {static: true}) componentRef?: PerfectScrollbarComponent;

  cards: Array<object> = [
    {
      image: 'assets/images/service/restoran.jpg',
      title: 'SPA Салон'
    },
    {
      image: 'assets/images/service/kafe_i_bar.jpg',
      title: 'Ресторан'
    },
    {
      image: 'assets/images/service/fitness.jpg',
      title: 'Фитнес-клуб'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }

}
