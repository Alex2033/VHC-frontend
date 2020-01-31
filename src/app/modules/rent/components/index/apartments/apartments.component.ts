import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartment: object = {
    area: 24,
    rooms: 'Для двоих',
    title: 'Двухместный номер с 1 кроватью',
    image: 'assets/images/pages/apartments/apartment-slider-image-1.jpg',
    price: 29000,
  };

  constructor() { }

  ngOnInit() {
  }

}
