import express from "express";

export class Controller {
    public getHello(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public postHello(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    public postSomething(req: express.Request, res: express.Response): void {
        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});
        client.connect(() => {
            console.log(client.isConnected());
            client.db("vibe").collection("collection").insert({name : "something", description: "this is something."});
            client.close();
        });
        res.send(req.body);
    }

}
