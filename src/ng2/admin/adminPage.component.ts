import { Component, Inject } from '@angular/core';

import template from './adminPage.tpl.html';

import { MainService } from '../../ng1/main/main.service';

@Component({
  selector: 'admin',
  template
})
export class AdminComponent{
  userName:string = 'John Doe';
  items:string[];

  constructor(@Inject(MainService) mainService: MainService) {
    this.items = mainService.getItems();
  }

  onHeroClick($event) {
    console.log($event);
  }

  onVillainClick(str) {
    console.log(str);
  }
}