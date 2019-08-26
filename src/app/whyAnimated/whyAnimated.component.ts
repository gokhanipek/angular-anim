import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-whyanimated',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="slide-text"><h2>Interaction means happy customers</h2></div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/satisfaction.jpg">
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
export class WhyAnimatedComponent {
}
