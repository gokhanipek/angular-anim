import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-examplesb',
    template: `
        <div [@fav]="likeState" (click)="liked()" class="heart"></div>
    `,
    styles: [`
        .heart {
        width: 100px;
        height: 100px;
        background: url(https://cssanimation.rocks/images/posts/steps/heart.png) no-repeat;
        cursor: pointer;
        },
        .image-container {
        width: 500px;
        }

        .image-container img {
        width: 100%;
        }
    `],
    animations: [
        trigger('fav', [
          state('unclicked', style({
            'background-position': '0 0'
          })),
          state('clicked', style({
            'background-position': '-2800px 0',
          })),
          transition('unclicked=>clicked', animate('1s steps(28)')),
        ]),
      ],
})
export class ExamplesbComponent {
    likeState = 'unclicked';

    liked(){
        this.likeState = this.likeState === 'unclicked' ? 'clicked' : 'unclicked';
      }  
}
