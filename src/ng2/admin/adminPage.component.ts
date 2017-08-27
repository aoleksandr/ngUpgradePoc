import { Component } from '@angular/core';

import template from './adminPage.tpl.html';

@Component({
  selector: 'admin',
  template
})
export class AdminComponent{
  public userName:string = 'John Doe';

  onHeroClick($event) {
    console.log($event);
  }

  onVillainClick(str) {
    console.log(str);
  }
}