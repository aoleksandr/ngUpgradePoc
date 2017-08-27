import { Ng2StateDeclaration } from "@uirouter/angular";

import { AdminComponent } from './adminPage.component';

export const adminRoutes: Ng2StateDeclaration[] = [{
  parent: 'app',
  name: 'admin',
  url: '/admin',
  component: AdminComponent,
}]
