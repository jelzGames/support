// https://material.angular.io/components/snack-bar/overview

import { Component } from '@angular/core'
import { AuthService } from '../Services/Auth';

@Component({
    selector: "nav",
    templateUrl: '../Templates/Nav.html',
    styleUrls: []
 })

export class NavComponent {

    constructor(public auth : AuthService) {}
}