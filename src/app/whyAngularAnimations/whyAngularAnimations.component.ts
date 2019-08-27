import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angularAnimations',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="text-slide">
                    <div class="slide-text">
                        <h2>Why angular animations</h2>
                    </div>
                    <div class="slide-text p-1">
                        <p> They are reusable. </p>
                    </div>
                </div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/Recycle.svg">
                        <img src="./../assets/reusable.png">
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
export class WhyAngularAnimationsComponent {

}
