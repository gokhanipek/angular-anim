import { AnimationTriggerMetadata, animate, state, style, transition, trigger } from "@angular/animations";


export class SlideAnimation {
    static animations = SlideAnimation.getAnimations();

    static getAnimations(): Array<AnimationTriggerMetadata> {
        return [
            trigger('slideState', [
                state(
                    'active',
                    style({ transform: 'translateY(0px)', opacity: 1 })),
                state( 'inactive',
                    style({ transform: 'translateY(-500px)', opacity: 0 })),
                transition('active => inactive', animate('400ms 100ms ease-in')),
                transition('inactive => active', animate('1000ms {{ delay }}ms cubic-bezier(.79,1.2,.83,.68)')),
            ]),
        ];
    }
}