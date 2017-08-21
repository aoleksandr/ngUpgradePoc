import angular from 'angular';

import { downgradeComponent } from '@angular/upgrade/static';
import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

import { MainPageComponent } from './mainPage.component';
import { MainService } from './main.service';
import { HeroComponent } from '../ng2/hero.component';

import routes from './ng1.routes';

export default angular.module('ng1', [uiRouter, upgradeModule.name])
  .component('mainPage', new MainPageComponent())
  .service('mainService', MainService)
  .directive('hero', downgradeComponent({ component: HeroComponent }))
  .config(($locationProvider, $urlMatcherFactoryProvider) => {
    $locationProvider.html5Mode({
      enabled: true
    });
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlMatcherFactoryProvider.strictMode(false);
  })
  .config(routes);






