/// <reference path="../typings.d.ts"/>
import 'reflect-metadata';
import 'zone.js/dist/zone';

// import * as angular from 'angular';

// import { MainPageComponent } from './mainPage.component';
// import { MainService } from './main.service';

// angular.module('app', [])
//   .component('mainPage', new MainPageComponent())
//   .service('mainService', MainService);

// angular.bootstrap(document.body, ['app']);

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})

export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    console.log(this.upgrade);
    // this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);