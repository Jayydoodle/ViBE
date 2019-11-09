"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vibe_database_1 = require("../vibe.database");
class UserController {
    // function to create event
    createUser(req, res) {
        const result = UserController.database.insertOne("vibe", "collection", {
            description: "this is a test for create user.",
            inUserCreate: "my bad"
        });
        res.send(result);
    }
    userInfo(req, res) {
        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(() => {
            console.log(client.isConnected());
            client.db("vibe").collection("collection").insert({
                description: "this is a test for user info.",
                inUserInfo: true
            }); // inserts into database
            // closes connection
            client.close();
        });
        console.log(client.isConnected());
        res.send(req.body);
    }
    deleteuser(req, res) {
        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(() => {
            console.log(client.isConnected());
            client.db("vibe").collection("collection").insert({
                description: "this is a test for user delete.",
                indelete: true
            }); // inserts into database
            // closes connection
            client.close();
        });
        console.log(client.isConnected());
        res.send(req.body);
    }
    editUserInfo(req, res) {
        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(() => {
            console.log(client.isConnected());
            client.db("vibe").collection("collection").insert({
                description: "this is a test for user Editing info.",
                inEditUserInfo: true
            }); // inserts into database
            // closes connection
            client.close();
        });
        console.log(client.isConnected());
        res.send(req.body);
    }
    allUsers(req, res) {
        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(() => {
            console.log(client.isConnected());
            client.db("vibe").collection("collection").insert({
                Allusers: true,
                description: "this is a test for all user info."
            }); // inserts into database
            // closes connection
            client.close();
        });
        console.log(client.isConnected());
        res.send(req.body);
    }
}
exports.UserController = UserController;
UserController.database = new vibe_database_1.VibeDatabase();
//# sourceMappingURL=userController.js.map