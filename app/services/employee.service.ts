import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable ()
export class EmployeeService {
    private apiUrl = 'http://586f1e760474f212000b027f.mockapi.io/api/messages/';
    private users;
    constructor (private _http: Http) {
    }

    GetList(): Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response) => response.json());
    }

    Add(data: any): Observable<any> {
        return this._http.post(this.apiUrl, data).map((response: Response) => response.json());
    }
}
