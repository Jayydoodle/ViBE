import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//import { environment } from '@environments/environment';
//import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient) {}
    dataBaseUri:string = "http://localhost:3000/api/";
    serviceLink:string = "users"

    public getUsers(){
        return this.http.get<any[]>(this.dataBaseUri+this.serviceLink);
    }

    public postUser(){
        return this.http.post(this.dataBaseUri+"/api", null);
    }
}