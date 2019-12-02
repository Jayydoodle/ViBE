import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';
import { tap, shareReplay } from 'rxjs/operators';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';

const bcrypt = require('bcryptjs');
const saltRounds = 10;

import {Request, Response} from "express";
import * as express from 'express';
const bodyParser = require('body-parser');
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";

//import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http:HttpClient){
    }
    dataBaseUri:string = "http://localhost:3000/api/";
    serviceLink:string = "authenticate"

    login(email:string, password:string) {
        /**
         * Returns a json web token on success and null on failure
         * Refer to the documentation in authenticationController on the server side
         */
        return this.http.post<any[]>(this.dataBaseUri+this.serviceLink+"/login", {email : email, password : password})
            .pipe(tap(res=>{
                this.setSession(res);
            }));
    }

    private setSession(authResult){
        if(authResult == null){
            return;
        }
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }

    register(newUser:User){
        return this.http.post<any>(this.dataBaseUri+this.serviceLink+"/register", newUser)
            .pipe(tap(res => {
                if(!res.success){
                    return;
                }
                this.login(newUser.email, newUser.password);
            }));
    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    } 

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    public get loggedIn(): boolean{
        return localStorage.getItem('access_token') !==  null;
    }
}