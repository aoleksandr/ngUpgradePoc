import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule} from '@angular/upgrade/static';

import { HeroComponent } from './hero.component';

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
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