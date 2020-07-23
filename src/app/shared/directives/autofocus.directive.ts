import { Directive, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterContentInit {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.el.nativeElement.focus();
    }, 300);
  }
}
