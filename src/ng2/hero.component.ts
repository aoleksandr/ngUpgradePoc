import { Component, EventEmitter, Input, Output } from '@angular/core';

import template from './hero.tpl.html';

@Component({
  selector: 'hero',
  template,
})
export class HeroComponent {
  @Input() hero: string;
  @Output() deleted = new EventEmitter<string>();

  onDelete() {
    this.deleted.emit(this.hero);
  }
}