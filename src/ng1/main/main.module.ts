import angular from 'angular';

import { MainPageComponent } from './mainPage.component';
import { MainService } from './main.service';

export default angular.module('ng1.main', [])
  .component('mainPage', new MainPageComponent())
  .service('mainService', MainService);
