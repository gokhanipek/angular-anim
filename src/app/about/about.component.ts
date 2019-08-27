import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
        <div class="page background">
            <div class="slide mb-5">
                <div class="slide-text">
                    <h1>Gökhan İpek - Betbull</h1>
                    <p>Javascript Fan</p>
                    <p>Professional Procrastinator</p>
                </div>
                <div class="slide-image"></div>
            </div>
        </div>
    `,
    styles: [`
        .background {
            display: flex;
            justify-content: center;
            text-align: center;
        }

        .page {
            height: 70vh;
        }
    `]
})
export class AboutComponent {

}
