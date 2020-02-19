import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { ResponsiveService } from '../../services/responsive.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-responsive-image',
  templateUrl: './responsive-image.component.html',
  styleUrls: ['./responsive-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiveImageComponent implements OnInit {
  static browserWebpChecking = false;
  static browserWebpSupported: ReplaySubject<boolean> = new ReplaySubject(0);
  @Input() xl: string;
  @Input() lg: string;
  @Input() md: string;
  @Input() sm: string;
  @Input() scrollObservable: Observable<any>;
  @Input() itemprop: string; //Schema property
  @Input() alt: string;
  webpChecked = false;
  webpSupported: boolean;
  constructor(private cdr: ChangeDetectorRef, public responsive: ResponsiveService) {
  }

  ngOnInit() {
    if(environment.useApi) {
      if(!ResponsiveImageComponent.browserWebpChecking) {
        ResponsiveImageComponent.browserWebpChecking = true;
        this.checkWebpFeature('lossy', (result) => {
          ResponsiveImageComponent.browserWebpSupported.next(result);
        });
      }
      ResponsiveImageComponent.browserWebpSupported.subscribe((result) => {
        this.webpChecked = true;
        this.webpSupported = result;
        this.cdr.detectChanges();
      });
    } else {
      this.webpChecked = true;
      this.webpSupported = false;
    }
  }

  checkWebpFeature(feature, callback) {
    let kTestImages = {
      lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
      lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
      alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
      animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    if(typeof Image !== 'undefined') {
     let img = new Image();
      img.onload = function () {
        let result = (img.width > 0) && (img.height > 0);
        callback(result);
      };
      img.onerror = function () {
        callback(false);
      };
      img.src = "data:image/webp;base64," + kTestImages[feature];
    } else {
      callback(false);
    }
  }
  url(screen, webp = false) {
    if(!webp) {
      return this[screen];
    } else {
      if(this[screen]) {
        let url = this[screen].split('.').slice(0, -1).join('.');
        return url + '.webp';
      }
    }
  }
}
