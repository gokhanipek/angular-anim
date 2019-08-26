import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-whyanimateb',
    template: `
    <div class="page">
            <div class="slide scroll">
                <div class="slide-text"><h2>Alive vs Dead App</h2></div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/animation.gif">
                        <img src="./../assets/ugly.png">
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .image-container {
            width: 400%"
        }
        .slide-image img {
            height: 300px;
        }
    `]
})
export class WhyAnimatebComponent {
}
