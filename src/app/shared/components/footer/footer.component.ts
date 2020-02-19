import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from '../../services/responsive.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  screen: string;

  icons: Array<object> = [
    { 
      src: 'assets/sprites/icons.svg#visa', 
      size: {
        desktop: {
          width: 54.15, 
          height: 16.92
        },
        mobile: {
          width: 45.34, 
          height: 14.17
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#mastercard', 
      size: {
        desktop: {
          width: 32, 
          height: 22
        },
        mobile: {
          width: 28.33, 
          height: 17.51
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#yandex', 
      size: {
        desktop: {
          width: 106.67, 
          height: 20.31
        },
        mobile: {
          width: 89.31,
          height: 17
        }
      }
    },
    { 
      src: 'assets/sprites/icons.svg#mir', 
      size: {
        desktop: {
          width: 60.06,
          height: 17
        },
        mobile: {
          width: 50.28,
          height: 14.23
        }
      }
    },
  ];

  constructor(public responsive: ResponsiveService) { }

  ngOnInit() {
    this.responsive.screen.subscribe((screen) => {
      this.screen = screen;
    });
  }

}
