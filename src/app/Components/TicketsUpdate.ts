import { Component, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver} from '@angular/core';

import { FormBuilder, Validators } from "@angular/forms"

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
    
    ;

    content = "";
    constructor(private fb: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) {
      this.TicketsUpdateForm = fb.group ({
      
      });

      $(document).ready(function() {
          ($("#editorPanel") as any).froalaEditor({
            events : {
              'froalaEditor.html.set': function (e, editor) {
                editor.events.trigger('charCounter.update');
              }
            },
            toolbarSticky: false,
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html', 'codePanel'],
          })
          
      });
      this.content = `<p>My HTML</p>`;
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
  
    innerCode;
    code() {
      var html =  ($("#editorPanel") as any).froalaEditor('html.get');
      console.log(html);     
      ($("#editorPanel") as any).froalaEditor('html.set', 'My custom paragraph.', true);
      ($("#editorPanel") as any).froalaEditor('events.trigger', 'charCounter.update');
      

      //this.innerCode = this.txtCode;
      //this.loadComponent();
    }
 
    
}

