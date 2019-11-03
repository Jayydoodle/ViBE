import express from "express";

export class vibeDatabase{

    private clusterName : string = "cluster0-ldrzf";
    private username : string = "dummy";
    private password : string = "dummy";

    public getUri() : string {
        return "mongodb+srv://"+this.username+":"+this.password+"@"+this.clusterName+".mongodb.net/test?retryWrites=true&w=majority";
    }

    public getUsername() : string {
        return this.username;
    }

    public setUsername(newUsername : string) {
        this.username = newUsername;
    }

    public setPassword(newPassword : string) {
        this.password;
    }

    public connect(callback:()=>any) : void {
        const MongoClient = require('mongodb').MongoClient;
        const client = new MongoClient(this.getUri(), { useNewUrlParser: true , useUnifiedTopology: true});
        client.connect((err : any)=>{
            if(!err){
                console.log(err);
            }else{
                callback();
            }
            client.close();
        });
    }

}