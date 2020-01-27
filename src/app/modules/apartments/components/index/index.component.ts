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
      rooms: 'Для двоих',
      title: 'Двухместный номер с 1 кроватью',
      description: 'Комфортабельный номер с телевизором, посудомоечной и стиральной машиной, чайной станцией и кондиционером. Все удобства в номере, завтрак включен.',
      images: [
        'assets/images/pages/apartments/apartment-slider-image-1.jpg',
        'assets/images/pages/apartments/apartment-slider-image-2.jpg',
        'assets/images/pages/apartments/apartment-slider-image-1.jpg',
        'assets/images/pages/apartments/apartment-slider-image-2.jpg',
      ] 
    },
    {
      area: 24,
      rooms: 'Для двоих',
      title: 'Номер-студио c кроватью king size',
      description: 'Номер повышенной комфортности с большой двуспальной кроватью. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
      images: [
        'assets/images/pages/apartments/apartment-slider-image-2.jpg',
        'assets/images/pages/apartments/apartment-slider-image-1.jpg',
        'assets/images/pages/apartments/apartment-slider-image-2.jpg',
        'assets/images/pages/apartments/apartment-slider-image-1.jpg',
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
