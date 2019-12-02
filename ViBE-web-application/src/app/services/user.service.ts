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
    serviceLink:string = "user"
    
    //
    public getUsers(){
        return this.http.get<any[]>(this.dataBaseUri+this.serviceLink);
    }
    
    public getUserByEmail(email:string){
        return this.http.get<any[]>(this.dataBaseUri+this.serviceLink+`/${email}`);
    }

    public postUser(){
        return this.http.post(this.dataBaseUri+"/api", null);
    }
}