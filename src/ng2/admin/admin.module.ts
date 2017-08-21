import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { adminRoutes } from './admin.route';

import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: adminRoutes })
  ],
  declarations: [
    AdminComponent
  ]
})

export class AdminModule {}