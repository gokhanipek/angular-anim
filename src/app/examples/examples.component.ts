import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-examples',
    template: ` 
    <h3>Balloon Effect</h3>
    <div class="balloon" (click)="balloonEffect()"
      [@balloonEffect]=balloonState>
    </div>
  `,
  styleUrls: ['./examples.component.css'],
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
    ],})
export class ExamplesComponent {
    balloonState = 'start'    
    balloonEffect(){
      this.balloonState = this.balloonState === 'start' ? 'end' : 'start';
    }
}
