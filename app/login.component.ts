import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'login-component',
    templateUrl: 'app/login.component.html'
})
export class LoginComponent  {
    constructor (private router: Router) {}

    CheckLogin(values: any) {
        if (values.username == 'admin' && values.password == '1234') {
            this.router.navigate(['/']);
        }
    }
}