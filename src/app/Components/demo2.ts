// https://material.angular.io/components/snack-bar/overview
// 

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Demo1Component } from './Demo1';

@Component({
  selector: 'demo2',
  template: `
    <md-card>
        <md-input-container>
            <input mdInput  [(ngModel)]="firstName" >
        </md-input-container>
        <md-input-container>
            <input mdInput [(ngModel)]="lastName" >
        </md-input-container>
        <button md-raised-button color="primary" (click)="sendEmail()">Login</button>
    </md-card> 
  `,
  styleUrls: []
})
export class Demo2Component  {
    email = "";

    @Input('firstName') firstName: string;
    @Input('lastName') lastName: string;
   
    // mandar al padre
    @Output() onEmail = new EventEmitter<string>();

    sendEmail() {
        this.onEmail.emit('email');
    }
}