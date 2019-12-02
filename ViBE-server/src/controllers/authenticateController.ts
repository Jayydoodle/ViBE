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
        const bcrypt = require("bcryptjs");
        const email = req.body.email;
        const password = req.body.password;

        AuthenticateController.database.connect(() => {
            AuthenticateController.database.getClient().db("vibe").collection("user")
              .find({email : { $eq: email}}).limit(1)
              .toArray()
              .then((user: any) => {
                  // console.log(user);
                   console.log(email);
                   console.log(password);
                   if (0 !== user.length) {
                      console.log(user.length !== 0);
                      console.log(user);
                      console.log("ayoo");
                      // Found user
                      bcrypt.compare(password, user[0].password, function(err: any, bool: boolean) {
                          if (err) {
                              console.log(err);
                          } else {
                              if (bool) {
                                    // password matches
                                    const jwtBearerToken = jwt.sign({}, "vibe-secret-key", {
                                        algorithm: "HS256",
                                        expiresIn: 120,
                                        subject: email
                                    });
                                    res.json(jwtBearerToken);
                                } else {
                                    res.json(null);
                                }
                          }});
                  } else {
                    // Didnt find user
                    res.json(null);
                  }
              }).catch((err: any) => {
                  console.log(err);
              });
        });
    }

    public register(req: express.Request, res: express.Response): void {
        const email = req.body.email;
        const password = req.body.password;
        const bcrypt = require("bcryptjs");

        const saltRounds = 10;
        req.body.password = bcrypt.hashSync(req.body.password, saltRounds);

        AuthenticateController.database.connect(() => {
            // Check if duplicate user exists
            AuthenticateController.database.getClient()
                .db("vibe")
                .collection("user")
                .find({email : { $eq: email}}).limit(1)
                .toArray()
                .then((result1: any) => {
                    if (0 === result1.length) {
                        AuthenticateController.database.connect(() => {
                            AuthenticateController.database.getClient()
                                .db("vibe")
                                .collection("user")
                                .insertOne(req.body)
                                .then(() => {
                                    res.send({success : true});
                                })
                                .catch((err: any) => {
                                    console.log(err);
                                });
                        });
                    } else {
                        res.send({success: false, error: 200});
                    }
                })
                .catch((err: any) => {
                    console.log(err);
                });
        });
    }
}
