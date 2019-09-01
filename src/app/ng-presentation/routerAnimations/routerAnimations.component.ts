import { Component } from '@angular/core';


@Component({
    selector: 'app-routerAnim',
    template: `        
    <div class="page">
        <div class="slide scroll">
            <div class="text-slide">
                <div class="slide-text">
                    <h2>Router Animations</h2>
                    <p>Similar to reusable animations, create an animation</p>
                </div>
            </div>
            <div class="image-container">
                <div class="slide-image horizontal">
                    <img src="./../assets/routeranim.png">
                </div>
            </div>
        </div>
    </div>
`,
})
export class RouterAnimComponent  {
}
