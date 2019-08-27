import { Component } from '@angular/core';

@Component({
    selector: 'app-thanku',
    template: `
        <div class="page">
            <div class="slide scroll">
                <div class="text-slide">
                    <div class="slide-text">
                        <h1>Thank You for Listening</h1>
                        <p>Github: https://github.com/gokhanipek</p>
                        <p>Website: www.gokhanipek.com</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .page {
            height: 70vh;
        }
    `]
})
export class ThankUComponent {
}
