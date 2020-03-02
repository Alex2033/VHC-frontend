import { Component, OnInit } from '@angular/core';
import { LoadingAnimationService } from 'src/app/shared/services/loading-animation.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss']
})
export class FirstScreenComponent implements OnInit {

  constructor(public animationLoading: LoadingAnimationService) { }

  ngOnInit() {
  }

}
