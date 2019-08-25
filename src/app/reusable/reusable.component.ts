import { Component } from '@angular/core';
import { SlideAnimation } from './../common/slide.animation';


@Component({
    selector: 'app-reusable',
    template: `
        <img src="./../assets/reuse.png"/>
        <img src="./../assets/reusehtml.png"/>
        <img src="./../assets/reusestate.png"/>
        <div class="animation-container">
            <div class="image-wrapper">
                <div *ngFor="let car of cars, let i = index" class="image-box" [@slideState]="{value: slide, params:{delay: (i*100)}}">
                    <div class="image">
                            <img src="{{car}}">
                    </div>
                </div>
                <div class="button">
                    <button (click)="toggleSlide()">Slide</button>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .animation-container {
            width: 60%;
            height: 500px;
            overflow: hidden;
        }
        .image-box {
            display: inline-block;
            margin: 5px;
            border: 2px solid red;
        }
        .image {
            width: 200px;
            height: auto;
        }

        .image img {
            width: 100%;
        }

      
    `],
    animations: SlideAnimation.animations  

})


export class ReusableComponent {
    cars:string[] = [
        './../assets/car1.jpg',
        './../assets/car2.jpg',
        './../assets/car3.jpg',
        './../assets/car4.jpg',
        './../assets/car5.jpg',
        './../assets/car6.jpg'
    ];

    slide: string = 'inactive';

    toggleSlide() {
      console.log(this.slide);
      this.slide = this.slide === 'inactive' ? 'active' : 'inactive';
    }
  
}
