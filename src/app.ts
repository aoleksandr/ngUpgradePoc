/// <reference path="../typings.d.ts"/>
import 'reflect-metadata';
import 'zone.js';
import 'angular';

import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import './ng1/ng1.module.ts'
import { ng2Module } from './ng2/ng2.module'

platformBrowserDynamic().bootstrapModule(ng2Module).then((platformRef) => {
  const injector = platformRef.injector;
  const upgrade = injector.get(UpgradeModule) as UpgradeModule;

  upgrade.bootstrap(document.body, ['ng1']);
})