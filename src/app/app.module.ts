import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './animations/animations.component';
import { DivingComponent } from './diving/diving.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { WhyAnimateComponent } from './whyAnimate/whyAnimate.component';
import { WhyAngularAnimationsComponent } from './whyAngularAnimations/whyAngularAnimations.component';
import { AngularAnimationsComponent } from './angularAnimations/angularAnimations.component';
import { ExamplesComponent } from './examples/examples.component';
import { ReusableComponent } from './reusable/reusable.component';
import { RouterAnimComponent } from './routerAnimations/routerAnimations.component';
import { ThankUComponent } from './thanku/thanku.component';


const appRoutes: Routes = [
  { path: 'diving', component: DivingComponent },
  { path: 'home',      component: AnimationsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'about', component: AboutComponent, data: {animation: 'about'}},
  { path: 'whyAnimate', component: WhyAnimateComponent},
  { path: 'whyAngularAnimations', component: WhyAngularAnimationsComponent},
  { path: 'angularAnimations', component: AngularAnimationsComponent},
  { path: 'examples', component: ExamplesComponent},
  { path: 'reuseable', component: ReusableComponent },
  { path: 'routerAnimations', component: RouterAnimComponent },
  { path: 'thanku', component: ThankUComponent},
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    DivingComponent,
    WelcomeComponent,
    AboutComponent,
    WhyAnimateComponent,
    WhyAngularAnimationsComponent,
    AngularAnimationsComponent,
    ExamplesComponent,
    ReusableComponent,
    RouterAnimComponent,
    ThankUComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
