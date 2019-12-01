import express from "express";
import {Request, Response} from "express";
import * as fs from "fs";
import * as jwt from "jsonwebtoken";
import {VibeDatabase} from "../vibe.database";

export class AuthenticateController {

    private static database: VibeDatabase = new VibeDatabase();

    public validateUser(email: string, password: string): boolean {
        const bcrypt = require("bcryptjs");
        const user: any = AuthenticateController.database.getOne("vibe", "user", {email});
        if (user == null) {
            return false;
        }
        return bcrypt.compareSync(password, user.password);
    }

    // function to create event
    public login(req: express.Request, res: express.Response): void {
        const email = req.body.email;
        const password = req.body.password;

        if (this.validateUser(email, password)) {
            // const RSA_PRIVATE_KEY = fs.readFileSync('./demos/private.key');
            const RSA_PRIVATE_KEY = "secret-key";
            const jwtBearerToken = jwt.sign({}, RSA_PRIVATE_KEY, {
                algorithm: "RS256",
                expiresIn: 120,
                subject: email
            });
            res.send(jwtBearerToken);
        } else {
            res.send(null);
        }
    }

    public register(req: express.Request, res: express.Response): void{
        const email = req.body.email;
        const password = req.body.password;
        
        //Check if duplicate user exists
        if(this.validateUser(email, password)){
            
        }
    }
}
