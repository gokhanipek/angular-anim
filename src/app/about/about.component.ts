import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    template: `
    <div class="col col-md-6">
        <div class="card mb-3">
        <h3 class="card-header">Gökhan ipek</h3>
        <div class="card-body">
            <h5 class="card-title">Gokhan - Frontend Developer</h5>
            <h6 class="card-subtitle text-muted">Betbull</h6>
        </div>
        <img style="height: auto; width: 200px; display: block;" src="./../assets/gokhan.jpg">
        <div class="card-body">
            <p class="card-text">Professional Procrastinator</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Physics Fan</li>
            <li class="list-group-item">Css Fan</li>
            <li class="list-group-item">Javascript Fan</li>
        </ul>
    </div>
    `,
})
export class AboutComponent {

}
