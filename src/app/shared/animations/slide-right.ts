import {trigger, style, animate, transition} from '@angular/animations';

export function SlideRight(duration = 350) {
  return trigger('slideRight', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({transform: 'translate(100%, 0)'}),
      animate(duration, style({transform: 'translate(0, 0)'}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(duration, style({transform: 'translate(100%, 0)'}))
    ])
  ]);
}