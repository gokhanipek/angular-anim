import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-examples',
    template: ` 
    <div class="page">
        <div class="slide scroll">
            <div class="text-slide">
                <div class="slide-text">
                    <h2>Balloon Effect</h2>
                </div>
            </div>
            <div class="image-container">
                <div class="slide-image horizontal">
                    <img src="./../assets/balloon.png">
                </div>
                <div class="slide-image horizontal">
                    <div class="slide-result">
                        <div class="balloon" (click)="balloonEffect()"
                            [@balloonEffect]=balloonState>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [`
    .balloon {
        width:100px;
        height:100px; 
        border-radius: 100%; 
        margin: 3rem; 
        background-color: green
    }

    img {
        height: 500px;
    }
  `],
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
