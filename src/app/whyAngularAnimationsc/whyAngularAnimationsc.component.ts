import { Component } from '@angular/core';

@Component({
    selector: 'app-angularAnimationsc',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="text-slide">
                    <div class="slide-text">
                        <h2>Why angular animations</h2>
                    </div>
                    <div class="slide-text p-1">
                        <p>Technically a css animation</p>
                        <p>Transitions and Styles are only applied during the animation</p>
                    </div>
                </div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/animationcss.gif">
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        img {
            height: 300px;
        }
    `]
})
export class WhyAngularAnimationscComponent {

}
