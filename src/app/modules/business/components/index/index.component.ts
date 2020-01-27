import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  aparts: Array<object> = [
    {
      area: 24,
      title: 'Пространство свободного назначения',
      description: 'Подходит для выставок, размещения продуктовых автоматов',
      price: 29000,
      images: [
        'assets/images/pages/business/business-1.jpg',
        'assets/images/pages/business/business-2.jpg',
        'assets/images/pages/business/business-1.jpg',
        'assets/images/pages/business/business-2.jpg',
      ] 
    },
    {
      area: 24,
      title: 'Конференц–зал',
      description: 'Подходит для выставок, размещения продуктовых автоматов',
      price: 29000,
      images: [
        'assets/images/pages/business/business-2.jpg',
        'assets/images/pages/business/business-1.jpg',
        'assets/images/pages/business/business-2.jpg',
        'assets/images/pages/business/business-1.jpg',
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
