import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartments: Array<object> = [
    { 
      title: 'Двухместный номер с 1 кроватью', 
      description: 'This double room has air conditioning and electric kettle.',
      imageURL: 'assets/images/apartments/apartment-1.jpg'
    },
    { 
      title: 'Номер-студио с кроватью размера "king-size"', 
      description: 'This double room has air conditioning and electric kettle.',
      imageURL: 'assets/images/apartments/apartment-2.jpg'
    },
    { 
      title: 'Люкс с 2 спальнями', 
      description: 'This double room has air conditioning and electric kettle.',
      imageURL: 'assets/images/apartments/apartment-3.jpg'
    },
    { 
      title: ' Люкс с 1 спальней', 
      description: 'This double room has air conditioning and electric kettle.',
      imageURL: 'assets/images/apartments/apartment-4.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
