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
import { WhyAnimatebComponent } from './whyAnimateb/whyAnimateb.component';
import { WhyAnimatecComponent } from './whyAnimatec/whyAnimatec.component';
import { WhyAnimatedComponent } from './whyAnimated/whyAnimated.component';
import { WhyAngularAnimationsbComponent } from './whyAngularAnimationsb/whyAngularAnimationsb.component';
import { WhyAngularAnimationscComponent } from './whyAngularAnimationsc/whyAngularAnimationsc.component';
import { WhyAngularAnimationsdComponent } from './whyAngularAnimationsd/whyAngularAnimationsd.component';
import { AngularAnimationsbComponent } from './angularAnimationsb/angularAnimationsb.component';
import { AngularAnimationscComponent } from './angularAnimationsc/angularAnimationsc.component';
import { AngularAnimationsdComponent } from './angularAnimationsd/angularAnimationsd.component';
import { ExamplesbComponent } from './examplesc/examplesc.component';
import { ExamplescComponent } from './examplesb/examplesb.component';
import { ExamplesdComponent } from './examplesd/examplesd.component';



const appRoutes: Routes = [
  { path: 'diving', component: DivingComponent },
  { path: 'home',      component: AnimationsComponent },
  { path: 'welcome', component: WelcomeComponent , data: {animation: 'welcome'} },
  { path: 'about', component: AboutComponent, data: {animation: 'about'}},
  { path: 'whyAnimate', component: WhyAnimateComponent, data: {animation: 'whyAnimate'}},
  { path: 'whyAnimateb', component: WhyAnimatebComponent, data: {animation: 'whyAnimateb'}},
  { path: 'whyAnimatec', component: WhyAnimatecComponent, data: {animation: 'whyAnimatec'}},
  { path: 'whyAnimated', component: WhyAnimatedComponent, data: {animation: 'whyAnimated'}},
  { path: 'whyAngularAnimations', component: WhyAngularAnimationsComponent, data: {animation: 'whyAngularAnimations'}},
  { path: 'whyAngularAnimationsb', component: WhyAngularAnimationsbComponent, data: {animation: 'whyAngularAnimationsb'}},
  { path: 'whyAngularAnimationsc', component: WhyAngularAnimationscComponent, data: {animation: 'whyAngularAnimationsc'}},
  { path: 'whyAngularAnimationsd', component: WhyAngularAnimationsdComponent, data: {animation: 'whyAngularAnimationsd'}},
  { path: 'angularAnimations', component: AngularAnimationsComponent,  data: {animation: 'angularAnimations'}},
  { path: 'angularAnimationsb', component: AngularAnimationsbComponent,  data: {animation: 'angularAnimationsb'}},
  { path: 'angularAnimationsc', component: AngularAnimationscComponent,  data: {animation: 'angularAnimationsc'}},
  { path: 'angularAnimationsd', component: AngularAnimationsdComponent,  data: {animation: 'angularAnimationsd'}},
  { path: 'examples', component: ExamplesComponent, data: {animation: 'examples'}},
  { path: 'examplesb', component: ExamplesbComponent, data: {animation: 'examplesb'}},
  { path: 'examplesc', component: ExamplescComponent, data: {animation: 'examplesc'}},
  { path: 'examplesd', component: ExamplesdComponent, data: {animation: 'examplesd'}},
  { path: 'reuseable', component: ReusableComponent , data: {animation: 'reusable'}},
  { path: 'routerAnimations', component: RouterAnimComponent, data: {animation: 'routerAnimations'} },
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
    ExamplesComponent,
    ExamplesbComponent,
    ExamplescComponent,
    ExamplesdComponent,
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
