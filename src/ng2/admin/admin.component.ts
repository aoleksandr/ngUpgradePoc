import { Component } from '@angular/core';

import template from './admin.tpl.html';

@Component({
  selector: 'admin',
  template
})
export class AdminComponent{
  public userName:string = 'John Doe';
}