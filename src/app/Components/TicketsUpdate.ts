import { Component, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver} from '@angular/core';

import { CodeHighlightDirective } from './CodeHighlight';
import { CodeItem } from './CodeItem';
import { CodeComponent } from './CodeComponent';
import { CodeContainerComponent } from './CodeContainer';

import * as jQuery from 'jquery';
import * as Prism from 'prismjs/prism';

@Component({
  selector: 'TicketsUpdate',
  templateUrl: '../Templates/TicketsUpdate.html',
  styleUrls: []
  
})
export class TicketsUpdateComponent implements AfterViewInit, OnDestroy  {
    TicketsUpdateForm;
    @ViewChild(CodeHighlightDirective) codeHost: CodeHighlightDirective;

    txtCode = "";
    
    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
      $(document).ready(function() {
          ($("#editorPanel") as any).froalaEditor({
            toolbarSticky: false,
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html', 'codePanel'],
          })
        
      });

    }

    ngAfterViewInit() {
    }
  
    ngOnDestroy() {
    }

    loadComponent() {
      var item = new CodeItem(CodeContainerComponent, {code: this.txtCode, language: 'css'});
     
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
     
      let viewContainerRef = this.codeHost.viewContainerRef;
      viewContainerRef.clear();
  
      let componentRef = viewContainerRef.createComponent(componentFactory);
      (<CodeComponent>componentRef.instance).data = item.data;
    }
  
    code() {
      this.loadComponent();
    }
 
}