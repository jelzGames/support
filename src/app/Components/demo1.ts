// https://material.angular.io/components/snack-bar/overview
// 

import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { Demo2Component } from './Demo2';

@Component({
  selector: 'demo1',
  template: `
   <form [formGroup]="form" (ngSubmit)="onSubmit() ">
     <md-card>
        <md-input-container>
          <input formControlName="email" [ngClass]="{'error': isValid('email')}"  mdInput placeholder="Correo" type="email">
        </md-input-container>
        <md-input-container>
          <input mdInput formControlName="password" [ngClass]="{'error': isValid('password')}" placeholder="Contraseña" type="password">
        </md-input-container>
        <md-input-container>
          <input mdInput formControlName="retry" [ngClass]="{'error': isValid('retry')}" placeholder="Retry" type="password">
        </md-input-container>
        <br/>
        <span *ngIf="form.errors?.notMatchingPassword" >Password do not match</span>
        <br/>
        <button md-raised-button color="primary">Upgrade</button>
        <br/>
        <!-- pasar al child -->
        <demo2 [firstName]='firstName' [lastName]='lastName' (onEmail)="onVoted($event)"></demo2>
      </md-card>
  </form>`
  ,
  styles: [`
    .error {
      background-color: #fff0f0
    }
  `
  ]
})
export class Demo1Component  {
    form;

    // pasar al child
    firstName = "Jose";
    lastName = "lopez";

    //recivir el valor
    onVoted(email) {
       this.form.controls['email'].setValue(email);
    }

    
    constructor(private fb: FormBuilder) {
      this.form = fb.group ({
          email: ["", [Validators.required, , this.emailValid()]],
          password:["", Validators.required],
          retry: ["", Validators.required]
        }, { validator: this.matchingPassword('password','retry') }
      )
     
    }
    
    onSubmit() {
      // da los valores
      console.log(this.form.value);

      // da los errores
      console.log(this.form.errors);
      
      // valida la forma
      console.log(this.form.valid);
    }
 
    isValid(control) {
      return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

    matchingPassword(password, retry) {
      return form => {
        if (form.controls[password].value != form.controls[retry].value) {
          return { notMatchingPassword : true}
        }
      }
    }

    emailValid() {
      return control => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return regex.test(control.value) ? null : { invalidEmail : true}
      }
    }
}