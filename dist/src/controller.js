"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Controller {
    getHello(req, res) {
        res.send("Hello World");
    }
    postHello(req, res) {
        res.send(req.body);
    }
    postSomething(req, res) {
        const MongoClient = require("mongodb").MongoClient;
        const uri = "mongodb+srv://dummy:dummy@cluster0-ldrzf.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(() => {
            console.log(client.isConnected());
            // client.db("vibe").collection("collection").insert({
            //    name : "something",
            //    description: "this is something."
            // });
            // const data = client.db("vibe").collection("collection").find({});
            // data.forEach((doc: any) => {console.log(JSON.stringify(doc)); }, () => {});
            client.close();
        });
        res.send(req.body);
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map