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

    public connect(callback: () => any): void {
        const MongoClient = require("mongodb").MongoClient;
        const client = new MongoClient(this.getUri(), { useNewUrlParser: true , useUnifiedTopology: true});
        client.connect((err: any) => {
            if (err) {
                console.log(err);
            } else {
                this.client = client;
                callback();
            }
            client.close();
            this.client = null;
        });
    }

    public insertOne(db:string, collection:string, data:JSON){
        this.connect(()=>{
            this.getClient().db(db).collection(collection).insertOne(data)
                .then((result:any)=>{
                    console.log("Document successfully inserted.")
                })
                .catch((err:any) =>{
                    console.log(err);
                });
        });
    }

    public insertAll(db:string, collection:string, data:JSON[], ordered?:boolean){
        this.connect(()=>{
            if(ordered){
                this.getClient().db(db).collection(collection).insertMany(data, { ordered: ordered})
                    .then((result:any) => {
                        console.log("("+result.insertedIds.length+") ordered document(s) successfully inserted.");
                    })
                    .catch((err:any)=>{
                        console.log(err);
                    });
            }else{
                this.getClient().db(db).collection(collection).insertMany(data)
                    .then((result:any) => {
                        console.log("("+result.insertedIds.length+") document(s) successfully inserted.");
                    })
                    .catch((err:any)=>{
                        console.log(err);
                    });
            }
        });
    }

}
