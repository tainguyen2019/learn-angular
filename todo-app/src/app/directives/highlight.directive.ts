import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(e : ElementRef) {
    e.nativeElement.style.backgroundColor = "yellow";
   }

}
