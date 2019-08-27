import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-angularAnimations',
    template: ` 
    <div class="page">
      <div class="slide scroll">
          <div class="text-slide">
              <div class="slide-text">
                  <h2>How to use?</h2>
              </div>
          </div>
          <div class="image-container">
              <div class="slide-image horizontal">
                  <img src="./../assets/appmodule.png">
              </div>
          </div>
      </div>
  </div>
    `,
    styleUrls: ['./angularAnimations.component.css'],
    animations: [
        trigger('balloonEffect', [
          state('start', style({
            transform: 'scale(1)'
          })),
          state('end', style({
            transform: 'scale(1.5)'
          })),
          transition('end=>start', animate('1s')),
          transition('start=>end', animate('1s'))
        ]),
      ],
})
export class AngularAnimationsComponent {
    balloonState = 'start'    
    balloonEffect(){
      this.balloonState = this.balloonState === 'start' ? 'end' : 'start';
    }

   
}
