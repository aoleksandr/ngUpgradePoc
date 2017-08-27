import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import VillainComponent from './villain.component';
import { HeroComponent } from '../../ng2/shared/hero.component';

export default angular.module('ng1.shared', [])
  .component('villain', VillainComponent)
  .directive('hero', downgradeComponent({ component: HeroComponent }));
