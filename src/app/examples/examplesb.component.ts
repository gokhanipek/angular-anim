import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-examplesb',
    template: ` 
    <div class="page">
        <div class="slide scroll">
            <div class="text-slide">
                <div class="slide-text">
                    <h2>Twitter Heart</h2>
                </div>
            </div>
            <div class="image-container">
                <div class="slide-image horizontal">
                    <img src="./../assets/twitter.png">
                </div>
                <div class="slide-image horizontal">
                    <div class="slide-result">
                        <div [@fav]="likeState" (click)="liked()" class="heart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `,
  styles: [`
        .heart {
            width: 100px;
            height: 100px;
            background: url(https://cssanimation.rocks/images/posts/steps/heart.png) no-repeat;
            cursor: pointer;
        }
        .slide-result {
            justify-content: center;
            display: flex;
            align-items: center;
        }
        .image-container img {
            width: 100%;
        }
        img {
            width: auto !important;
            height: 500px;
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
