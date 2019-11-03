import express from "express";
import {VibeDatabase} from "./vibe.database";

export class UserController {

<<<<<<< HEAD:src/userController.ts
    // function to create event
    public createUser(req: express.Request, res: express.Response): void {

    // creating a connection to the database:
     const MongoClient = require("mongodb").MongoClient;
     const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
     const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
     client.connect(() => {
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({inUserCreate : true, description: "this is a test for create user."}); // inserts into database
=======
    private static database: VibeDatabase = new VibeDatabase();

    // function to create event
    public createUser(req: express.Request, res: express.Response): void {
>>>>>>> 426371e054f84b53fdaa9d6a9a4f560b893a3e48:src/user.Controller.ts

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
<<<<<<< HEAD:src/userController.ts
       client.db("vibe").collection("collection").insert({inUserInfo : true, description: "this is a test for user info."}); // inserts into database
=======
       client.db("vibe").collection("collection").insert({
        description: "this is a test for user info.",
        inUserInfo : true
        }); // inserts into database
>>>>>>> 426371e054f84b53fdaa9d6a9a4f560b893a3e48:src/user.Controller.ts

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
<<<<<<< HEAD:src/userController.ts
   console.log(client.isConnected());
   client.db("vibe").collection("collection").insert({indelete : true, description: "this is a test for user delete."}); // inserts into database
=======
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({
      description: "this is a test for user delete.",
      indelete : true
      }); // inserts into database
>>>>>>> 426371e054f84b53fdaa9d6a9a4f560b893a3e48:src/user.Controller.ts

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
<<<<<<< HEAD:src/userController.ts
   console.log(client.isConnected());
   client.db("vibe").collection("collection").insert({inEditUserInfo : true, description: "this is a test for user Editing info."}); // inserts into database
=======
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({
      description: "this is a test for user Editing info.",
      inEditUserInfo : true
    }); // inserts into database
>>>>>>> 426371e054f84b53fdaa9d6a9a4f560b893a3e48:src/user.Controller.ts

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
<<<<<<< HEAD:src/userController.ts
   console.log(client.isConnected());
   client.db("vibe").collection("collection").insert({Allusers : true, description: "this is a test for all user info."}); // inserts into database
=======
    console.log(client.isConnected());
    client.db("vibe").collection("collection").insert({
      Allusers : true,
      description: "this is a test for all user info."
    }); // inserts into database
>>>>>>> 426371e054f84b53fdaa9d6a9a4f560b893a3e48:src/user.Controller.ts

 // closes connection
    client.close();
   });
    console.log(client.isConnected());
    res.send(req.body);
}
}
