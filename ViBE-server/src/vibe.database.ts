import express from "express";

export class VibeDatabase {

    private clusterName: string = "cluster0-ldrzf";
    private username: string = "dummy";
    private password: string = "dummy";
    private client: any;

    public getUri(): string {
        return "mongodb+srv://" + this.username + ":" + this.password + "@" + this.clusterName + ".mongodb.net/test?retryWrites=true&w=majority";
    }

    public getUsername(): string {
        return this.username;
    }

    public getPassword(): string {
        return this.password;
    }

    public getClient(): any {
        return this.client;
    }

    public setUsername(newUsername: string) {
        this.username = newUsername;
    }

    public setPassword(newPassword: string) {
        this.password = newPassword;
    }

    public connect2() {
        const mongoose = require("mongoose");
        mongoose.Promise = Promise;

        mongoose.connect(this.getUri(), {useNewUrlParser: true , useUnifiedTopology: true})
            .then((err: any) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Successfully connected");
                }
            });
        }

    public connect(callback: () => any): void {
        const MongoClient = require("mongodb").MongoClient;
        const client = new MongoClient(this.getUri(), { useNewUrlParser: true , useUnifiedTopology: true});
        let result: any;
        client.connect((err: any) => {
            if (err) {
                console.log(err);
            } else {
                this.client = client;
                result = callback();
            }
            client.close();
            this.client = null;
        });
        return result;
    }

    public getOne(db: string, collection: string, query?: {}, projections?: {}): any {
        return this.connect(() => {
            this.getClient().db(db).collection(collection).findOne(query, projections)
                .then((result: any) => {
                    return result;
                })
                .catch((err: any) => {
                    console.log(err);
                });
        });
    }

    public getAll(db: string, collection: string): any {
        return this.connect(() => {
            this.getClient().db(db).collection(collection).find()
                .then((result: any) => {
                    return result;
                })
                .catch((err: any) => {
                    console.log(err);
                });
        });
    }

    public insertOne(db: string, collection: string, data: object) {
        return this.connect(() => {
            this.getClient().db(db).collection(collection).insertOne(data)
                .then((result: any) => {
                    console.log("Document " + result.insertedId + " successfully inserted into "
                        + db + "." + collection + ".");
                    return result;
                })
                .catch((err: any) => {
                    console.log(err);
                });
        });
    }

    public insertAll(db: string, collection: string, data: object[], ordered?: boolean) {
        return this.connect(() => {
            if (ordered) {
                this.getClient().db(db).collection(collection).insertMany(data, { ordered})
                    .then((result: any) => {
                        console.log("("
                            + result.insertedIds.length
                            + ") ordered document(s) successfully into "
                            + db + "." + collection + ".");
                    })
                    .catch((err: any) => {
                        console.log(err);
                    });
            } else {
                this.getClient().db(db).collection(collection).insertMany(data)
                    .then((result: any) => {
                        console.log("("
                            + result.insertedIds.length
                            + ") document(s) successfully into "
                            + db + "." + collection + ".");
                    })
                    .catch((err: any) => {
                        console.log(err);
                    });
            }
        });
    }

}
