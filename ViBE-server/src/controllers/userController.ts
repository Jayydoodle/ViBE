import express from "express";
import {VibeDatabase} from "../vibe.database";

export class UserController {

    private static database: VibeDatabase = new VibeDatabase();

    // function to create event
    public createUser(req: express.Request, res: express.Response): void {
      UserController.database.connect(() => {
      UserController.database.getClient().db("vibe").collection("user").insertOne(
        req.body
       );
      res.send(req.body);
    });
  }

  public UpdateUserLocation(req: express.Request, res: express.Response): void {

    UserController.database.connect(() => {
        UserController.database.getClient().db("vibe").collection("user").updateOne(
          { author: req.body.author},
          { $set: { long: req.body.long, lat: req.body.lat}
          })

        .then(function(result: any) {
          console.log(result + "updated");
        });
      });
}
}
