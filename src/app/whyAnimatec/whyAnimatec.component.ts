import { Component, OnInit } from '@angular/core';

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
        .image-container {
            width: 100%;
        }
        img {
            width: 100%;
        }
    `]
})
export class WhyAnimatecComponent {
}
