import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule} from '@angular/upgrade/static';

import { UIRouterModule } from '@uirouter/angular';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    UIRouterUpgradeModule,
    UIRouterModule,
    AdminModule,
    SharedModule,
  ],
  declarations: [
  ]
})
export class ng2Module {
  ngDoBootstrap() {}
}