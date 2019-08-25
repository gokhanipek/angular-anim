import { Component } from '@angular/core';
import { slideInAnimation } from './router-animation';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'angular-animations';
}
