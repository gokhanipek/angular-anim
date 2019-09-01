import { Component } from '@angular/core';

@Component({
    selector: 'app-quote',
    template: `
    <div class="page">
        <div class="slide scroll">
            <div class="text-slide">
                <div class="slide-text">
                    <h2>Animation is not the art of drawings that move <br/>but the art of movements that are drawn.</h2>
                    <p>Norman McLaren</p>
                </div>
            </div>
            <div class="image-container">
                <div class="slide-image horizontal">
                    <img src="./../assets/norman.jpeg">
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`

    `]
})
export class QuoteComponent {
}
