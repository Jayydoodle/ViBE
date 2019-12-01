import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { tap, shareReplay } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

//import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http:HttpClient){}
    dataBaseUri:string = "http://localhost:3000/api/";
    serviceLink:string = "authenticate"

    login(email:string, password:string) {
        return this.http.post<{access_token: string}>(this.dataBaseUri+this.serviceLink+"/login", {email, password})
            .pipe(tap(res => {
                localStorage.setItem('access_token', res.access_token);
            }));
    }

    register(newUser:User){
        return this.http.post<{access_token: string}>(this.dataBaseUri+this.serviceLink+"/register", newUser)
            .pipe(tap(res => {
                this.login(newUser.email, newUser.password);
            }));
    }

    logout() {
        localStorage.removeItem('access_token');
    }

    public get loggedIn(): boolean{
        return localStorage.getItem('access_token') !==  null;
    }
}