import { trigger, state, style, transition, animate } from '@angular/animations';

export const SlideAnimation = trigger('slideState', [
  state('*', style({
    transform: 'translateX(-500px)',
  })),
  state('active', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  state('inactive',   style({
    transform: 'translateY(-500px)',
    opacity: 0
  })),
  transition('* => active', animate('500ms {{ delay }}ms cubic-bezier(.79,1.2,.83,.68)')),
  transition('active => inactive', animate('500ms 100ms ease-in'))
]);