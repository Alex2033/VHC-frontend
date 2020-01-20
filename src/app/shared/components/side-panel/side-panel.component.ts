import { Component, OnInit } from '@angular/core';
import { SlideRight } from '../../animations/slide-right';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  animations: [SlideRight()]
})
export class SidePanelComponent implements OnInit {

  showMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
