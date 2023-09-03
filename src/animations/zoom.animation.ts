import { transition, trigger, useAnimation } from '@angular/animations';

import { zoomIn, zoomOut } from 'ng-animate';

export const zoomOutAnimation = trigger('zoomOut',
  [
    transition(':leave',
      useAnimation(zoomOut, {
        params: { timing: .15 }
      })
    ),
  ]
);

export const zoomInAnimation = trigger('zoomIn',
  [
    transition(':enter',
      useAnimation(zoomIn , {
        params: { timing: .15 }
      })
    ),
  ]
);
