"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class VibeDatabase {
    constructor() {
        this.clusterName = "cluster0-ldrzf";
        this.username = "dummy";
        this.password = "dummy";
    }
    getUri() {
        return "mongodb+srv://" + this.username + ":" + this.password + "@" + this.clusterName + ".mongodb.net/test?retryWrites=true&w=majority";
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getClient() {
        return this.client;
    }
    setUsername(newUsername) {
        this.username = newUsername;
    }
    setPassword(newPassword) {
        this.password = newPassword;
    }
    connect(callback) {
        const MongoClient = require("mongodb").MongoClient;
        const client = new MongoClient(this.getUri(), { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect((err) => {
            if (err) {
                console.log("woaah");
                console.log(err);
            }
            else {
                this.client = client;
                callback();
            }
            client.close();
            this.client = null;
        });
    }
}
exports.VibeDatabase = VibeDatabase;
//# sourceMappingURL=vibe.database.js.map