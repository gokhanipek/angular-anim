import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-examplesc',
    template: ` 
        <div class="page">
            <div class="slide scroll">
                <div class="text-slide">
                    <div class="slide-text">
                        <h2>Rotate Animation</h2>
                    </div>
                </div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img class="spinner-code" src="./../assets/spinnercode.png">
                    </div>
                    <div class="slide-image horizontal">
                        <div class="slide-result">
                            <img [@rotate]="rotateState" (click)="rotate()" class="spinner" src="./../assets/spinner.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .spinner-code {
            width: auto;
            height: 500px;
        }
        .slide-result {
            width: 250px;
            height: 250px;
            padding: 20px;
        }
        .spinner {
            width: 80%;
            height: auto;
        }
    `],
    animations: [
        trigger('rotate', [
          state('start', style({
            transform: 'rotate(0deg)'
          })),
          state('end', style({
              transform: 'rotate(1600deg)'
          })),
          transition('start <=> end', animate('1s')),
        ]),
      ],
})
export class ExamplescComponent {
    rotateState = 'start';
    rotate(){
        this.rotateState = this.rotateState === 'start' ? 'end' : 'start';
    }
}
