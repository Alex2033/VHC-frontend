import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)'}),
          animate('350ms', style({transform: 'translateX(0)'}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)'}),
          animate('350ms', style({transform: 'translateX(100%)'}))
        ])
      ]
    )
  ]
})
export class SidePanelComponent implements OnInit {

  showMenu: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
