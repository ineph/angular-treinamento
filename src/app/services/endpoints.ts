import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EndpointsServices {

    constructor(private http: HttpClient){}

    get_employee(){
        return this.http.get<any>(`${environment.api}employees`)
    }
}