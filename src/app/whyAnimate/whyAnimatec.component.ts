import { Component } from '@angular/core';

@Component({
    selector: 'app-whyanimatec',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="slide-text"><h2>Not every animation is beautiful</h2></div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/badanimation.gif">
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`

    `]
})
export class WhyAnimatecComponent {
}
