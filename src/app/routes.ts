import { Routes } from '@angular/router';
import { DivingComponent } from './diving/diving.component';
import { AnimationsComponent } from './animations/animations.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { WhyAnimateComponent } from './whyAnimate/whyAnimate.component';
import { WhyAnimatebComponent } from './whyAnimate/whyAnimateb.component';
import { WhyAnimatecComponent } from './whyAnimate/whyAnimatec.component';
import { WhyAnimatedComponent } from './whyAnimate/whyAnimated.component';
import { WhyAngularAnimationsComponent } from './whyAngularAnimations/whyAngularAnimations.component';
import { WhyAngularAnimationsbComponent } from './whyAngularAnimations/whyAngularAnimationsb.component';
import { WhyAngularAnimationscComponent } from './whyAngularAnimations/whyAngularAnimationsc.component';
import { WhyAngularAnimationsdComponent } from './whyAngularAnimations/whyAngularAnimationsd.component';
import { AngularAnimationsComponent } from './angularAnimations/angularAnimations.component';
import { AngularAnimationsbComponent } from './angularAnimations/angularAnimationsb.component';
import { AngularAnimationscComponent } from './angularAnimations/angularAnimationsc.component';
import { AngularAnimationsdComponent } from './angularAnimations/angularAnimationsd.component';
import { AngularAnimationseComponent } from './angularAnimations/angularAnimationse.component';
import { AngularAnimationsfComponent } from './angularAnimations/angularAnimationsf.component';
import { ExamplesComponent } from './examples/examples.component';
import { ExamplesbComponent } from './examples/examplesb.component';
import { ExamplescComponent } from './examples/examplesc.component';
import { ExamplesdComponent } from './examples/examplesd.component';
import { ReusableComponent } from './reusable/reusable.component';
import { ReusablebComponent } from './reusable/reusableb.component';
import { ReusablecComponent } from './reusable/reusablec.component';
import { RouterAnimComponent } from './routerAnimations/routerAnimations.component';
import { RouterAnimbComponent } from './routerAnimations/routerAnimationsb.component';
import { ThankUComponent } from './thanku/thanku.component';

export const appRoutes: Routes = [
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
    { path: 'angularAnimationse', component: AngularAnimationseComponent,  data: {animation: 'angularAnimationse'}},  
    { path: 'angularAnimationsf', component: AngularAnimationsfComponent,  data: {animation: 'angularAnimationsf'}},  
    { path: 'examples', component: ExamplesComponent, data: {animation: 'examples'}},
    { path: 'examplesb', component: ExamplesbComponent, data: {animation: 'examplesb'}},
    { path: 'examplesc', component: ExamplescComponent, data: {animation: 'examplesc'}},
    { path: 'examplesd', component: ExamplesdComponent, data: {animation: 'examplesd'}},
    { path: 'reuseable', component: ReusableComponent , data: {animation: 'reusable'}},
    { path: 'reuseableb', component: ReusablebComponent , data: {animation: 'reusableb'}},
    { path: 'reuseablec', component: ReusablecComponent , data: {animation: 'reusablec'}},
    { path: 'routerAnimations', component: RouterAnimComponent, data: {animation: 'routerAnimations'} },
    { path: 'routerAnimationsb', component: RouterAnimbComponent, data: {animation: 'routerAnimationsb'} },
    { path: 'thanku', component: ThankUComponent},
    { path: '**', component: WelcomeComponent }
  ];
  