import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-whyanimate',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="slide-text"></div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/oldvsnew.png">
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`

    `]
})
export class WhyAnimateComponent {
}
