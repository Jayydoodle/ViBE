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
    getOne(db, collection, query, projections) {
        return this.connect(() => {
            this.getClient().db(db).collection(collection).findOne(query, projections)
                .then((result) => {
                return result;
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
    getAll(db, collection) {
        return this.connect(() => {
            this.getClient().db(db).collection(collection).find()
                .then((result) => {
                return result;
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
    insertOne(db, collection, data) {
        return this.connect(() => {
            this.getClient().db(db).collection(collection).insertOne(data)
                .then((result) => {
                console.log("Document " + result.insertedId + " successfully inserted into "
                    + db + "." + collection + ".");
                return result;
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
    insertAll(db, collection, data, ordered) {
        return this.connect(() => {
            if (ordered) {
                this.getClient().db(db).collection(collection).insertMany(data, { ordered })
                    .then((result) => {
                    console.log("("
                        + result.insertedIds.length
                        + ") ordered document(s) successfully into "
                        + db + "." + collection + ".");
                })
                    .catch((err) => {
                    console.log(err);
                });
            }
            else {
                this.getClient().db(db).collection(collection).insertMany(data)
                    .then((result) => {
                    console.log("("
                        + result.insertedIds.length
                        + ") document(s) successfully into "
                        + db + "." + collection + ".");
                })
                    .catch((err) => {
                    console.log(err);
                });
            }
        });
    }
}
exports.VibeDatabase = VibeDatabase;
//# sourceMappingURL=vibe.database.js.map