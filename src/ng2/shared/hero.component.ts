import { Component, EventEmitter, Input, Output } from '@angular/core';

import template from './hero.tpl.html';

@Component({
  selector: 'hero',
  template,
})
export class HeroComponent {
  @Input() placement: string;
  @Output() btnHandler = new EventEmitter<string>();

  onBtnClick() {
    this.btnHandler.emit(`button clicked from ${this.placement}`);
  }
}