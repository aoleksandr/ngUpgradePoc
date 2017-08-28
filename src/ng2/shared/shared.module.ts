import { NgModule } from '@angular/core';

import { UpgradeModule } from '@angular/upgrade/static';

import { HeroComponent } from './hero.component';
import { VillainDirective } from './villain.component';

import { mainServiceProvider } from './ng1-upgraded-providers';

@NgModule({
  imports: [
    UpgradeModule,
  ],
  declarations: [
    HeroComponent,
    VillainDirective
  ],
  exports: [
    HeroComponent,
    VillainDirective
  ],
  entryComponents: [
    HeroComponent
  ],
  providers: [
    mainServiceProvider
  ]
})

export class SharedModule {}