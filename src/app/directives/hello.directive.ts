import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHello]',
  standalone: true
})
export class HelloDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.innerHTML = "Hello";
  }

}
