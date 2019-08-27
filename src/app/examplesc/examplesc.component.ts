import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-examplesc',
    template: ` 
        <button (click)="addItem()">Add List</button>
            <ul>
                <li *ngFor="let list of listItem" [@fadeInOut]>
                    {{list}}
                </li>
            </ul>
    `,
    animations: [
        trigger('fadeInOut', [
          state('void', style({
            opacity: 0
          })),
          transition('void <=> *', animate(1000)),
        ]),
      ],
})
export class ExamplescComponent {
    listItem = [];
    list_order: number = 1;

    addItem() {
      let _listItem = "ListItem " + this.list_order;
      this.list_order++;
      this.listItem.push(_listItem);
    }
}
