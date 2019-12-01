import express from "express";
import {VibeDatabase} from "../vibe.database";

export class UserController {

    private static database: VibeDatabase = new VibeDatabase();

    // function to create event
    public getAllUsers(req: express.Request, res: express.Response): void {

      UserController.database.connect(() => {
          const Users = UserController.database.getClient().db("vibe").collection("user").find({});

          function iterateFunc(doc: any) {
              console.log(doc);
           }

          function errorFunc(error: any) {
              console.log(error);
           }
          Users.forEach(iterateFunc, errorFunc);
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
