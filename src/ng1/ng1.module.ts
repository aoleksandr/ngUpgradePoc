import angular from 'angular';

import uiRouter from "@uirouter/angularjs";
import { upgradeModule } from "@uirouter/angular-hybrid";

import './shared/shared.module';
import './main/main.module';

import routes from './ng1.routes';

export default angular.module('ng1', [uiRouter, upgradeModule.name, 'ng1.shared', 'ng1.main'])

  .config(($locationProvider, $urlMatcherFactoryProvider) => {
    $locationProvider.html5Mode({
      enabled: true
    });
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $urlMatcherFactoryProvider.strictMode(false);
  })
  .config(routes);






