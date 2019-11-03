import express from "express";

export class UserController {

    //function to create event
    public createUser(req: express.Request, res: express.Response): void {
        
    //creating a connection to the database:
     const MongoClient = require("mongodb").MongoClient;
     const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
     const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
     client.connect(() => {
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({inUserCreate : true, description: "this is a test for create user."});//inserts into database

  // closes connection
    client.close();
    });
     console.log(client.isConnected());
     res.send(req.body);
    }

    public userInfo(req: express.Request, res: express.Response) : void {

        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
        client.connect(() => {
       console.log(client.isConnected());
       client.db("vibe").collection("collection").insert({inUserInfo : true, description: "this is a test for user info."});//inserts into database
   
     // closes connection
       client.close();
       });
        console.log(client.isConnected());
        res.send(req.body);
}

public deleteuser(req: express.Request, res: express.Response) : void {

    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
    client.connect(() => {
   console.log(client.isConnected());
   client.db("vibe").collection("collection").insert({indelete : true, description: "this is a test for user delete."});//inserts into database

 // closes connection
   client.close();
   });
    console.log(client.isConnected());
    res.send(req.body);
}

public editUserInfo(req: express.Request, res: express.Response) : void {

    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
    client.connect(() => {
   console.log(client.isConnected());
   client.db("vibe").collection("collection").insert({inEditUserInfo : true, description: "this is a test for user Editing info."});//inserts into database

 // closes connection
   client.close();
   });
    console.log(client.isConnected());
    res.send(req.body);
}

public allUsers(req: express.Request, res: express.Response) : void {

    const MongoClient = require("mongodb").MongoClient;
    const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
    client.connect(() => {
   console.log(client.isConnected());
   client.db("vibe").collection("collection").insert({Allusers : true, description: "this is a test for all user info."});//inserts into database

 // closes connection
   client.close();
   });
    console.log(client.isConnected());
    res.send(req.body);
}
}