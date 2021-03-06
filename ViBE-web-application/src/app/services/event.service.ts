import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Event} from './../models/event'
//import { environment } from '@environments/environment';
//import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class EventService {

    constructor(private http:HttpClient){}

    dataBaseUri:string = "http://localhost:3000/api/";
    serviceLink:string = "event";

    public getEvents(){
        return this.http.get<any[]>(this.dataBaseUri+this.serviceLink);
    }

    public createEvent(event:Event){
        return this.http.post(this.dataBaseUri+this.serviceLink,event);
    }

    public getEventsByCategory(category:string){
        return this.http.get<any[]>(this.dataBaseUri+this.serviceLink+`/${category}`);
    }


}