import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-angularAnimations',
    template: ` 
        <img src="./../assets/anim-code.png" />
        <img src="./../assets/state-code.png" />
        <img src="./../assets/query-code.png" />
        
        <h3>Change the div size</h3>
        <br />
        <div (click)="sizeEffect()" [@changeDivSize]=sizeState></div>
        <br />

        <h3>Balloon Effect</h3>
        <div (click)="balloonEffect()" 
        style="width:100px;height:100px; border-radius: 100%; margin: 3rem; background-color: green"
        [@balloonEffect]=balloonState>
        </div>

        <h3>Fade-In and Fade-Out animation</h3>

        <button (click)="addItem()">Add List</button>
        <button (click)="removeItem()">Remove List</button>

        <div style="width:200px; margin-left: 20px">
        <ul>
            <li *ngFor="let list of listItem" [@fadeInOut]>
            {{list}}
            </li>
        </ul>
        </div>

        <div [@fav]="likeState" (click)="liked()" class="heart"></div>
    `,
    styles: [`
    .heart {
      width: 100px;
      height: 100px;
      background: url(https://cssanimation.rocks/images/posts/steps/heart.png) no-repeat;
      cursor: pointer;
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
          transition('unclicked=>clicked', animate('10s steps(28)')),
        ]),
        trigger('changeDivSize', [
          state('initialSize', style({
            backgroundColor: 'green',
            width: '100px',
            height: '100px'
          })),
          state('finalSize', style({
            backgroundColor: 'red',
            width: '200px',
            height: '200px'
          })),
          transition('initialSize=>finalSize', animate('1500ms')),
          transition('finalSize=>initialSize', animate('1000ms'))
        ]),
        trigger('balloonEffect', [
          state('initialBalloon', style({
            backgroundColor: 'green',
            transform: 'scale(1)'
          })),
          state('finalBalloon', style({
            backgroundColor: 'red',
            transform: 'scale(1.5)'
          })),
          transition('finalBalloon=>initialBalloon', animate('1000ms')),
          transition('initialBalloon=>finalBalloon', animate('1500ms'))
        ]),
        trigger('fadeInOut', [
          state('void', style({
            opacity: 0
          })),
          transition('void <=> *', animate(1000)),
        ]),
        
      ],
})
export class AngularAnimationsComponent {
    sizeState = 'initialSize';
    likeState = 'unclicked';

    sizeEffect() {
      this.sizeState = this.sizeState === 'initialSize' ? 'finalSize' : 'initialSize';
    }

    liked(){
      this.likeState = this.likeState === 'unclicked' ? 'clicked' : 'unclicked';
    }
    
    
    balloonState = 'initialBalloon'
    balloonEffect(){
      this.balloonState = this.balloonState === 'initialBalloon' ? 'finalBalloon' : 'initialBalloon';
    }

    listItem = [];
    list_order: number = 1;

    addItem() {
      let _listItem = "ListItem " + this.list_order;
      this.list_order++;
      this.listItem.push(_listItem);
    }
    removeItem() {
      this.listItem.length -= 1;
    }
}
