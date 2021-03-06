import { Routes } from '@angular/router';
import { DivingComponent } from './ng-presentation/diving/diving.component';
import { AnimationsComponent } from './ng-presentation/animations/animations.component';
import { WelcomeComponent } from './ng-presentation/welcome/welcome.component';
import { AboutComponent } from './ng-presentation/about/about.component';
import { WhyAnimateComponent } from './ng-presentation/whyAnimate/whyAnimate.component';
import { WhyAnimatebComponent } from './ng-presentation/whyAnimateb/whyAnimateb.component';
import { WhyAnimatecComponent } from './ng-presentation/whyAnimatec/whyAnimatec.component';
import { WhyAnimatedComponent } from './ng-presentation/whyAnimated/whyAnimated.component';
import { WhyAngularAnimationsComponent } from './ng-presentation/whyAngularAnimations/whyAngularAnimations.component';
import { WhyAngularAnimationsbComponent } from './ng-presentation/whyAngularAnimationsb/whyAngularAnimationsb.component';
import { WhyAngularAnimationscComponent } from './ng-presentation/whyAngularAnimationsc/whyAngularAnimationsc.component';
import { WhyAngularAnimationsdComponent } from './ng-presentation/whyAngularAnimationsd/whyAngularAnimationsd.component';
import { AngularAnimationsComponent } from './ng-presentation/angularAnimations/angularAnimations.component';
import { AngularAnimationsbComponent } from './ng-presentation/angularAnimationsb/angularAnimationsb.component';
import { AngularAnimationscComponent } from './ng-presentation/angularAnimationsc/angularAnimationsc.component';
import { AngularAnimationsdComponent } from './ng-presentation/angularAnimationsd/angularAnimationsd.component';
import { AngularAnimationseComponent } from './ng-presentation/angularAnimationse/angularAnimationse.component';
import { AngularAnimationsfComponent } from './ng-presentation/angularAnimationsf/angularAnimationsf.component';
import { ExamplesComponent } from './ng-presentation/examples/examples.component';
import { ExamplesbComponent } from './ng-presentation/examplesb/examplesb.component';
import { ExamplescComponent } from './ng-presentation/examplesc/examplesc.component';
import { ExamplesdComponent } from './ng-presentation/examplesd/examplesd.component';
import { ReusableComponent } from './ng-presentation/reusable/reusable.component';
import { ReusablebComponent } from './ng-presentation/reusableb/reusableb.component';
import { ReusablecComponent } from './ng-presentation/reusablec/reusablec.component';
import { RouterAnimComponent } from './ng-presentation/routerAnimations/routerAnimations.component';
import { RouterAnimbComponent } from './ng-presentation/routerAnimationsb/routerAnimationsb.component';
import { ThankUComponent } from './ng-presentation/thanku/thanku.component';

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
  