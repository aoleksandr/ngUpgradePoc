import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { adminRoutes } from './admin.route';

import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './adminPage.component';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: adminRoutes }),
    SharedModule
  ],
  declarations: [
    AdminComponent,
  ]
})

export class AdminModule {}