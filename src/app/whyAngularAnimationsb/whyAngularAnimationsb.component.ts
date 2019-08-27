import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angularAnimationsb',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="text-slide">
                    <div class="slide-text">
                        <h2>Why angular animations</h2>
                    </div>
                    <div class="slide-text p-1">
                        <p>The animation states - Let's you animate elements being added or removed from the DOM.        </p>
                    </div>
                </div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/open-closed.png">
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
export class WhyAngularAnimationsbComponent {

}
