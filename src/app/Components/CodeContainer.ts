import { Component, Input, Type, OnInit } from '@angular/core';
import { CodeComponent } from './CodeComponent';

///replace template
//template: `<prism-block [code]="cssCode" [language]="'css'"></prism-block>`

@Component({
   template: ``
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