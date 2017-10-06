import { Component, Input, Type, OnInit } from '@angular/core';
import { CodeComponent } from './CodeComponent';

@Component({
  template: `<prism-block [code]="cssCode" [language]="'css'"></prism-block>`
})
export class CodeContainerComponent implements CodeComponent {
    @Input() data: any;
    cssCode = "";
    language = "";

    ngOnInit() {
      this.cssCode = this.data.code;
      this.language = this.data.language;
    }

    
}