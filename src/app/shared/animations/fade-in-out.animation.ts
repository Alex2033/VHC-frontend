import {trigger, style, animate, transition} from '@angular/animations';

export function fadeInOutAnimation(duration = 350) {
  return trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(duration, style({opacity:1}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(duration, style({opacity:0}))
    ])
  ]);
}