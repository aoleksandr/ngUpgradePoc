import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule} from '@angular/upgrade/static';

import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { AdminModule } from './admin/admin.module';

import { HeroComponent } from './hero.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule,
    UIRouterModule,
    AdminModule
  ],
  declarations: [
    HeroComponent
  ],
  entryComponents: [
    HeroComponent
  ]
})

export class ng2Module {
  ngDoBootstrap() {}
}