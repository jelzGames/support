// https://material.angular.io/components/snack-bar/overview
// 

import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'reservaciones',
  templateUrl: '../Templates/Reservaciones.html',
  styleUrls: []
})
export class ReservacionesComponent  {
    reservacionform;

    constructor(private fb: FormBuilder) {
      this.reservacionform = fb.group ({
          folio: ["", Validators.required],
          fecha:["", Validators.required],
          reservo:["", Validators.required],
          huesped: ["", Validators.required],
          agencia: ["", Validators.required],
          grupo: ["", Validators.required],
          cliente: ["", Validators.required],
          nombre: ["", Validators.required],
          direccion: ["", Validators.required],
          poblacion: ["", Validators.required],
          telefono: ["", Validators.required],
          rfc: ["", Validators.required],
          llegada: ["", Validators.required],
          salida: ["", Validators.required],
          entradaoficial: ["", Validators.required],
          salidaoficial: ["", Validators.required],
          diasestancia: ["", Validators.required],
          fechadevencimiento: ["", Validators.required],
          pagodeposito: ["", Validators.required],
          capturo: ["", Validators.required],
          tipodepago: ["", Validators.required],
          observacion: ["", Validators.required]

        }
      )
     
    }
    
    onSubmit() {
      // da los valores
      console.log(this.reservacionform.value);

      // da los errores
      console.log(this.reservacionform.errors);
      
      // valida la forma
      console.log(this.reservacionform.valid);
    }
 
    isValid(control) {
      return this.reservacionform.controls[control].invalid && this.reservacionform.controls[control].touched;
    }

    matchingPassword(password, retry) {
      return reservacionform => {
        if (reservacionform.controls[password].value != reservacionform.controls[retry].value) {
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