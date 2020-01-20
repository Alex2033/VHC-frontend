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
      description: 'Комфортабельный номер с телевизором, посудомоечной и стиральной машиной, чайной станцией и кондиционером. Все удобства в номере, завтрак включен.',
      imageURL: 'assets/images/apartments/apartment-1.jpg'
    },
    { 
      title: 'Номер-студио c кроватью king size', 
      description: 'Номер повышенной комфортности с большой двуспальной кроватью. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
      imageURL: 'assets/images/apartments/apartment-2.jpg'
    },
    { 
      title: 'Люкс с 2 спальнями', 
      description: 'Апартаменты состоят из двух спален и гостиной. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
      imageURL: 'assets/images/apartments/apartment-3.jpg'
    },
    { 
      title: ' Люкс с 1 спальней', 
      description: 'Двухкомнатные апартаменты со спальней и гостиной. Есть телевизор, посудомоечная и стиральная машины, чайная станция, кондиционер. Все удобства в номере, завтрак включен.',
      imageURL: 'assets/images/apartments/apartment-4.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
