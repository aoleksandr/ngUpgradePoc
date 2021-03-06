import template from './mainPage.tpl.html';

import { MainService } from './main.service';

export class MainPageComponent implements ng.IComponentOptions {
  public template = template;
  public controller = MainPageController;
};

class MainPageController implements ng.IComponentController {
  items: string[];

  constructor(mainService: MainService) {
    this.items = mainService.getItems();
  }

  onHeroClick($event) {
    console.log($event);
  }

  onVillainClick(str) {
    console.log(str);
  }
}