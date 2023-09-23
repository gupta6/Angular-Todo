import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]',
})
export class RedElDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

  ngOnInit() {
    // this.el.nativeElement.innerText = ' Todo list';
  }
}
