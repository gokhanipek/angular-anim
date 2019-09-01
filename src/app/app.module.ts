import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationsComponent } from './animations/animations.component';
import { DivingComponent } from './diving/diving.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { WhyAnimateComponent } from './whyAnimate/whyAnimate.component';
import { WhyAngularAnimationsComponent } from './whyAngularAnimations/whyAngularAnimations.component';
import { AngularAnimationsComponent } from './angularAnimations/angularAnimations.component';
import { ExamplesComponent } from './examples/examples.component';
import { ReusableComponent } from './reusable/reusable.component';
import { ReusablebComponent } from './reusable/reusableb.component';
import { RouterAnimComponent } from './routerAnimations/routerAnimations.component';
import { ThankUComponent } from './thanku/thanku.component';
import { WhyAnimatebComponent } from './whyAnimate/whyAnimateb.component';
import { WhyAnimatecComponent } from './whyAnimate/whyAnimatec.component';
import { WhyAnimatedComponent } from './whyAnimate/whyAnimated.component';
import { WhyAngularAnimationsbComponent } from './whyAngularAnimations/whyAngularAnimationsb.component';
import { WhyAngularAnimationscComponent } from './whyAngularAnimations/whyAngularAnimationsc.component';
import { WhyAngularAnimationsdComponent } from './whyAngularAnimations/whyAngularAnimationsd.component';
import { AngularAnimationsbComponent } from './angularAnimations/angularAnimationsb.component';
import { AngularAnimationscComponent } from './angularAnimations/angularAnimationsc.component';
import { AngularAnimationsdComponent } from './angularAnimations/angularAnimationsd.component';
import { AngularAnimationseComponent } from './angularAnimations/angularAnimationse.component';
import { ExamplesbComponent } from './examples/examplesb.component';
import { ExamplescComponent } from './examples/examplesc.component';
import { ExamplesdComponent } from './examples/examplesd.component';
import { AngularAnimationsfComponent } from './angularAnimations/angularAnimationsf.component';
import { ReusablecComponent } from './reusable/reusablec.component';
import { RouterAnimbComponent } from './routerAnimations/routerAnimationsb.component';
import { appRoutes } from './routes';




@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    DivingComponent,
    WelcomeComponent,
    AboutComponent,
    WhyAnimateComponent,
    WhyAnimatebComponent,
    WhyAnimatecComponent,
    WhyAnimatedComponent,
    WhyAngularAnimationsComponent,
    WhyAngularAnimationsbComponent,   
    WhyAngularAnimationscComponent, 
    WhyAngularAnimationsdComponent, 
    AngularAnimationsComponent,
    AngularAnimationsbComponent,
    AngularAnimationscComponent,
    AngularAnimationsdComponent,
    AngularAnimationseComponent,
    AngularAnimationsfComponent,
    ExamplesComponent,
    ExamplesbComponent,
    ExamplescComponent,
    ExamplesdComponent,
    ReusableComponent,
    ReusablebComponent,
    ReusablecComponent,
    RouterAnimComponent,
    RouterAnimbComponent,
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
