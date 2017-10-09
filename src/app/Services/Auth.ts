import { Injectable } from '@angular/core';
import { AlertComponent }  from '../Components/Alert';
import { WebService } from '../Services/WebService';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    constructor(private webService: WebService, private router : Router) {}

    async login(model) {
        await this.webService.postAuth(model);
    }

    logout() {
        localStorage.removeItem("TokenInfo");
        this.router.navigate(['/login']);
    }
 
    get isAuthenticated() {
        return true;
        //return !!localStorage.getItem("TokenInfo");
    }
}