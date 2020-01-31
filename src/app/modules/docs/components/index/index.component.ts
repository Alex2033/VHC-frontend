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
      title: 'Актуальная проектная декларация',
      description: 'Редакция от 10 июня 2019 года',
      file: 'PDF 1.2 МБ'
    },
    {
      title: 'Проектная декларация',
      description: 'Редакция от 30 января 2017 года',
      file: 'PDF 1.2 МБ'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  scrollToElement(element: string) {
    this.componentRef.directiveRef.scrollToElement(element, null, 300);
  }

}
