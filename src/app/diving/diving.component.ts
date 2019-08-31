import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-diving',
    template: `
        <div class="window">
            <div class="sun"></div>
            <div class="island">
            <img (click)="diving()" class="diver" src="./../../assets/diver.png"/>
            <div class="tree">
                <div class="leaf leaf-1"></div>
                <div class="leaf leaf-2"></div>
                <div class="leaf leaf-3"></div>
                <div class="leaf leaf-4"></div>
                <div class="leaf leaf-5"></div>
                <div class="leaf leaf-6"></div>
                <div class="leaf leaf-7"></div>
                <div class="leaf leaf-8"></div>
                <div class="leaf leaf-9"></div>
                <div class="leaf leaf-10"></div>
            </div>
            </div>
            <div [@diving]=seaState class="wave"></div>
        </div>    
    `,
    styleUrls: ['./diving.component.css'],
    animations: [
        trigger('diving', [
          state('initialState', style({
            transform: 'translate(0px)',
          })),
          state('finalState', style({
            transform: 'translateY(-70%)',
          })),
          transition('initialState=>finalState', animate('1500ms')),
        ]),
      ],})
export class DivingComponent {
    seaState = 'initialState';

    diving(){
        console.warn(this.seaState);
        this.seaState = this.seaState === 'initialState' ? 'finalState' : 'initialState'
    }
}
