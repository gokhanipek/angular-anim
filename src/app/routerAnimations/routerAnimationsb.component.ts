import { Component } from '@angular/core';


@Component({
    selector: 'app-routerAnimb',
    template: `        
    <div class="page">
        <div class="slide scroll">
            <div class="text-slide">
                <div class="slide-text">
                    <h2>Router Animations</h2>
                    <p>But this time, add it inside app.component.ts and your router-outlet. </p>
                </div>
            </div>
            <div class="image-container">
                <div class="slide-image horizontal">
                    <img src="./../assets/routeranim2.png">
                </div>
            </div>
        </div>
    </div>
`,
})
export class RouterAnimbComponent  {
}
