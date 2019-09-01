import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-angularAnimationsf',
    template: ` 
      <div class="page">
        <div class="slide scroll">
            <div class="text-slide">
                <div class="slide-text">
                    <h2>Result</h2>
                    <p>Congragulations on your first Angular Animation</p>
                </div>
            </div>
            <div class="image-container">
                <div class="slide-image horizontal">
                    <img src="./../assets/fullcomp.png">
                </div>
                <div class="slide-image horizontal">
                    <div class="slide-result">
                        <button class="btn btn-success" (click)="addItem()">Add</button>
                        <ul>
                            <li *ngFor="let list of listItem" [@fadeInOut]>
                                {{list}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
        img {
            height: 500px;
        }
        .slide-result {
            padding: 5px;
            width: 200px;
            height: 200px;
            border: 5px solid black;
            overflow: auto;
            border-radius: 5px;
        }

        .slide-result ul {
            list-style: none;
            margin-left: unset;
            padding: unset;
            text-align: center;
            font-size: 1.4em;
        }

        li {
            padding: 5px;
            color: black;
        }
    `],
    animations: [
        trigger('fadeInOut', [
          state('void', style({
            opacity: 0
          })),
          transition('void <=> *', animate(1000)),
        ]),
      ],
})
export class AngularAnimationsfComponent {
    listItem = [];
    list_order: number = 1;

    addItem() {
      let _listItem = "ListItem " + this.list_order;
      this.list_order++;
      this.listItem.push(_listItem);
    }
}
