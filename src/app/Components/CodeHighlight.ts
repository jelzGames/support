import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[code-host]',
})
export class CodeHighlightDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}