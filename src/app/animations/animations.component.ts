import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-animations',
    template: 
    `
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



    `,
    animations: [
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
export class AnimationsComponent  {
    sizeState = 'initialSize';
    balloonState = 'initialBalloon'

    sizeEffect() {
      this.sizeState = this.sizeState === 'initialSize' ? 'finalSize' : 'initialSize';
    }

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
