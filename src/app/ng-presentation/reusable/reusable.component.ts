import { Component } from '@angular/core';
import { SlideAnimation } from './../common/slide.animation';


@Component({
    selector: 'app-reusable',
    template: `    
        <div class="page">
            <div class="slide scroll">
                <div class="text-slide">
                    <div class="slide-text">
                        <h2>Reusable Animations</h2>
                        <p>Create an animation and assign it on a variable. Export it.</p>
                    </div>
                </div>
                <div class="image-container">
                    <div class="slide-image horizontal">
                        <img src="./../assets/reusable2.png">
                    </div>

                </div>
            </div>
        </div>
    `,
    styles: [`
 
      
    `],
    animations: [ SlideAnimation ]  

})


export class ReusableComponent {
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
      console.log(this.slide);
      this.slide = this.slide === 'inactive' ? 'active' : 'inactive';
    }
  
}
