import { transition, trigger, useAnimation } from '@angular/animations';

import { fadeInDown, fadeInUp, fadeOutDown, fadeOutUp } from 'ng-animate';

export const fadeInDownAnimation = trigger('fadeInDown',
  [
    transition(':enter',
      useAnimation(fadeInDown, {
        params: { timing: .15 }
      })
    ),
  ]
);

export const fadeInUpAnimation = trigger('fadeInUp',
  [
    transition(':enter',
      useAnimation(fadeInUp , {
        params: { timing: .15 }
      })
    ),
  ]
);

export const fadeOutDownAnimation = trigger('fadeOutDown',
  [
    transition(':leave',
      useAnimation(fadeOutDown, {
        params: { timing: .15 }
      })
    ),
  ]
);

export const fadeOutUpAnimation = trigger('fadeOutUp',
  [
    transition(':leave',
      useAnimation(fadeOutUp , {
        params: { timing: .15 }
      })
    ),
  ]
);
