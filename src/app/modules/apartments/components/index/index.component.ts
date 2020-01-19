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
      rooms: 'Для 2-х',
      title: 'Двухместный номер с 1 кроватью',
      description: 'This double room has air conditioning and electric kettle.',
      images: [
        'assets/images/pages/apartments/apartment-slider-image-1.jpg',
        'assets/images/pages/apartments/apartment-slider-image-2.jpg',
        'assets/images/pages/apartments/apartment-slider-image-1.jpg',
        'assets/images/pages/apartments/apartment-slider-image-2.jpg',
      ] 
    },
    {
      area: 24,
      rooms: 'Для 2-х',
      title: 'Двухместный номер с 1 кроватью',
      descripion: 'This double room has air conditioning and electric kettle.',
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
