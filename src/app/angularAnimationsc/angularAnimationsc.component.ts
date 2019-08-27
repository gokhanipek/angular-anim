import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-angularAnimationsc',
    template: ` 
      <div class="page">
        <div class="slide scroll">
            <div class="text-slide">
                <div class="slide-text">
                    <h2>How to use?</h2>
                </div>
            </div>
            <div class="image-container">
                <div class="slide-image horizontal">
                    <img src="./../assets/enterstate.png">
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
    `],
})
export class AngularAnimationscComponent {
}
