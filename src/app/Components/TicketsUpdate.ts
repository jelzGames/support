import { Component, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver} from '@angular/core';

import { FormBuilder, Validators } from "@angular/forms"

import { CodeHighlightDirective } from './CodeHighlight';
import { CodeItem } from './CodeItem';
import { CodeComponent } from './CodeComponent';
import { CodeContainerComponent } from './CodeContainer';

import * as jQuery from 'jquery';


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

