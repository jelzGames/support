import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//https://alligator.io/angular/flex-layout/
import { FlexLayoutModule } from "@angular/flex-layout";

import { WebService } from './Services/WebService';
import { AuthService } from './Services/Auth';
import { AccessGuardService } from './Services/AccessGuard';

import { LoginComponent } from  './Components/Login'
import { NavComponent } from  './Components/Nav'
import { AppComponent }  from './app.component';
import { HomeComponent }  from './Components/Home';
import { AlertComponent }  from './Components/Alert';
import { Demo1Component }  from './Components/Demo1';
import { Demo2Component }  from './Components/Demo2';
import { ReservacionesComponent } from './Components/Reservaciones';

//https://angular.io/guide/dynamic-component-loader
// dynamic content
import { TicketsUpdateComponent }  from './Components/TicketsUpdate';
import { CodeHighlightDirective }  from './Components/CodeHighlight';
import { CodeContainerComponent }  from './Components/CodeContainer';

//install jquery
//npm install --save jquery
//npm install -D @types/jquery

// https://github.com/chymz/ng2-ckeditor
import { CKEditorModule } from 'ng2-ckeditor';

var routes = [
  {
    path: '',
    component: HomeComponent,
    data: { requiresLogin: true },
    canActivate: [ AccessGuardService ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'TicketsUpdate',
    component: TicketsUpdateComponent,
    data: { requiresLogin: true },
    canActivate: [ AccessGuardService ]
  },
  {
    path: 'alert',
    component: AlertComponent,
    data: { requiresLogin: true },
    canActivate: [ AccessGuardService ]
  },
  {
    path: 'demo1',
    component: Demo1Component,
    data: { requiresLogin: true },
    canActivate: [ AccessGuardService ]
  },
  {
    path: 'demo2',
    component: Demo2Component,
    data: { requiresLogin: true },
    canActivate: [ AccessGuardService ]
  },
  {
    path: 'reservaciones',
    component: ReservacionesComponent,
    data: { requiresLogin: true },
    canActivate: [ AccessGuardService ]
  }
];


@NgModule({
  imports:      [ 
                  BrowserModule, MaterialModule, RouterModule.forRoot(routes), FormsModule, HttpModule, BrowserAnimationsModule, ReactiveFormsModule, 
                  FlexLayoutModule, CKEditorModule
                ],
  declarations: [ AppComponent, LoginComponent, NavComponent, HomeComponent, AlertComponent, Demo1Component, Demo2Component, ReservacionesComponent,
                  TicketsUpdateComponent, CodeContainerComponent, CodeHighlightDirective ],
  bootstrap:    [ AppComponent ],
  providers:    [ WebService, AuthService, AccessGuardService],
  entryComponents: [ CodeContainerComponent ],
})
export class AppModule { }


