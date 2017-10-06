import { Component } from '@angular/core'
import { AuthService } from '../Services/Auth';

@Component({
    selector: "login",
    templateUrl: '../Templates/Login.html',
    styleUrls: []
 })

export class LoginComponent {

    constructor(public auth : AuthService) {}
    
    loginData = {
        email: 'eduardo.cortez@elitesports.mx',
        password: 'lalocb2222'
    }

}