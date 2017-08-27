import { NgModule } from '@angular/core';

import { UpgradeModule } from '@angular/upgrade/static';

import { HeroComponent } from './hero.component';
import { VillainDirective } from './villain.component';

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
  ]
})

export class SharedModule {}