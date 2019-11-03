import express from "express";
import {VibeDatabase} from "./vibe.database";

export class UserController {

    private static database: VibeDatabase = new VibeDatabase();

    // function to create event
    public createUser(req: express.Request, res: express.Response): void {

      UserController.database.connect(() => {
          UserController.database.getClient().db("vibe").collection("collection").insert({
            description: "this is a test for create user.",
            inUserCreate : "my bad"
           }); // inserts into database
         });
      // // closes connection
      res.send(req.body);
    }

    public userInfo(req: express.Request, res: express.Response): void {

        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
        client.connect(() => {
       console.log(client.isConnected());
       client.db("vibe").collection("collection").insert({
        description: "this is a test for user info.",
        inUserInfo : true
        }); // inserts into database

     // closes connection
       client.close();
       });
        console.log(client.isConnected());
        res.send(req.body);
    }

public deleteuser(req: express.Request, res: express.Response): void {

    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
    client.connect(() => {
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({
      description: "this is a test for user delete.",
      indelete : true
      }); // inserts into database

 // closes connection
    client.close();
   });
    console.log(client.isConnected());
    res.send(req.body);
}

public editUserInfo(req: express.Request, res: express.Response): void {

    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
    client.connect(() => {
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({
      description: "this is a test for user Editing info.",
      inEditUserInfo : true
    }); // inserts into database

 // closes connection
    client.close();
   });
    console.log(client.isConnected());
    res.send(req.body);
}

public allUsers(req: express.Request, res: express.Response): void {

    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
    client.connect(() => {
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({
      Allusers : true,
      description: "this is a test for all user info."
    }); // inserts into database

 // closes connection
    client.close();
   });
    console.log(client.isConnected());
    res.send(req.body);
}
}
