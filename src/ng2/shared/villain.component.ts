import { Directive, ElementRef, Injector, Inject, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'villain'
})
export class VillainDirective extends UpgradeComponent {
  @Input() placement: string;
  @Input() btnHandler: Function;

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
    super('villain', elementRef, injector);
  }
}