import express from "express";
import {VibeDatabase} from "../vibe.database";

export class UserController {

  private static database: VibeDatabase = new VibeDatabase();

  public getAllUsers(req: express.Request, res: express.Response): void {
    UserController.database.connect(() => {
        const Users = UserController.database.getClient().db("vibe").collection("user")
          .find({})
          .toArray()
          .then((result: any) => {
            res.json(result);
          });
    });
  }

  public getUserByEmail(req: express.Request, res: express.Response): void {
    UserController.database.connect(() => {
        const Users = UserController.database.getClient().db("vibe").collection("user")
          .find({author : req.params.userEmail})
          // .find({email : req.params.userEmail})
          .toArray()
          .then((result: any) => {
            res.json(result);
          });
    });
  }

  public UpdateUserLocation(req: express.Request, res: express.Response): void {

    UserController.database.connect(() => {
        UserController.database.getClient().db("vibe").collection("user").updateOne(
          { email: req.body.email},
          { $set: { long: req.body.long, lat: req.body.lat}
          })

        .then(function(result: any) {
          console.log(result + "updated");
        });
      });
  }
}
