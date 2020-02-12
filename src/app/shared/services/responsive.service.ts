import {HostListener, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  screen: ReplaySubject<string>;

  constructor(@Inject(PLATFORM_ID) private platformId) {
    this.screen = new ReplaySubject(0);
    if (isPlatformBrowser(this.platformId)) {
      this.checkWidth();
      window.addEventListener('resize', () => {
        this.checkWidth();
      }, true);
    } else {
      this.screen.next('xl'); // Должно быть значение по умолчанию для SSR
    }
  }

  checkWidth() {
    const width = window.innerWidth;
    if (width >= 1360) {
      this.screen.next('xl');
    } else {
      if (width >= 1024) {
        this.screen.next('lg');
      } else {
        if (width >= 768) {
          this.screen.next('md');
        } else {
          if (width >= 575) {
            this.screen.next('sm');
          } else {
            this.screen.next('xs');
          }
        }
      }
    }
  }
}
