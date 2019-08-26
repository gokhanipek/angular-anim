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
                        <p>Transition styles - these styles are only applied during transition from one state to another </p>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class WhyAngularAnimationsComponent {

}
