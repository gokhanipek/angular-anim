import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-whyanimate',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="slide-text"></div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/addiction.jpg">>
                    </div>
                    <div class="slide-image horizontal">
                        <img src="./../assets/satisfaction.jpg">>
                    </div>
                    <div class="slide-image horizontal">
                        <img src="./../assets/animation.gif">>
                    </div>
                    <div class="slide-image horizontal">
                        <img src="./../assets/boring.png">>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .image-container {
            width: 400%"
        }
    `]
})
export class WhyAnimateComponent {
}
