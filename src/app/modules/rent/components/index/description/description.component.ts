import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/shared/animations/fade-in-out.animation';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  animations: [
    fadeInOutAnimation(200),
  ]
})
export class DescriptionComponent implements OnInit {

  videoVisible: boolean = false;
  videoUrl: string = 'https://www.youtube.com/embed/63JrJ1ofado';
  sanitizeredUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.sanitizeredUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl + "?autoplay=1");
  }

  playVideo() {
    this.videoVisible = true;
  }

}
