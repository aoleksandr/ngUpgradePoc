import angular from 'angular';

import { downgradeComponent } from '@angular/upgrade/static';

import { MainPageComponent } from './mainPage.component';
import { MainService } from './main.service';
import { HeroComponent } from '../ng2/hero.component';

export default angular.module('ng1', [])
  .component('mainPage', new MainPageComponent())
  .service('mainService', MainService)
  .directive('hero', downgradeComponent({ component: HeroComponent }));






