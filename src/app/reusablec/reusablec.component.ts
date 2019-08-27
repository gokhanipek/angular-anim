import { Component } from '@angular/core';
import { SlideAnimation } from '../common/slide.animation';


@Component({
    selector: 'app-reusablec',
    template: `    
        <div class="page">
            <div class="slide scroll">
                <div class="text-slide">
                    <div class="slide-text">
                        <h2>Reusable Animations</h2>
                        <p>Now you can use the animation in another component.</p>
                    </div>
                </div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/reusable-comp.png">
                    </div>

                </div>
            </div>
        </div>
    `,
    styles: [`
    img{
        width: 50%;
        height: auto;
    }
    `],
    animations: [ SlideAnimation ]  

})


export class ReusablecComponent {
    cars:string[] = [
        './../assets/car1.jpg',
        './../assets/car2.jpg',
        './../assets/car3.jpg',
        './../assets/car4.jpg',
        './../assets/car5.jpg',
        './../assets/car6.jpg',
        './../assets/car1.jpg',
        './../assets/car2.jpg'
    ];

    slide: string = 'inactive';

    toggleSlide() {
      this.slide = this.slide === 'inactive' ? 'active' : 'inactive';
    }
  
}
