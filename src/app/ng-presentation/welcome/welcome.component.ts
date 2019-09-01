import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    template: `
        <div class="page">
            <div class="slide">
                <div class="slide-text">
                    <h1 class="display-3">Welcome to NgTurkey Meet-up!</h1>
                </div>
                <div class="slide-image"></div>
            </div>
        </div>
    `,
    styles: [`
        .page {
            height: 70vh;
        }
    `]
})
export class WelcomeComponent {

}
