import express from "express";
import {VibeDatabase} from "../vibe.database";

export class EventController {

    private static database: VibeDatabase = new VibeDatabase();

    // function to create event
    public createEvent(req: express.Request, res: express.Response): void {

      EventController.database.connect(() => {
         EventController.database.getClient().db("vibe").collection("event").insertOne(
              req.body
              ); // inserts into database
         });
      // // closes connection
      res.send(req.body);
      console.log(req.body);
    }

    public eventInfo(req: express.Request, res: express.Response): void {

        EventController.database.connect(() => {

            EventController.database.getClient().db("vibe").collection("collection").findone(
                req.body
                );
           });
        // // closes connection
        res.send(req.body);
    }

    public getAllEvents(req: express.Request, res: express.Response): void {

        EventController.database.connect(() => {
            const events = EventController.database.getClient().db("vibe").collection("event").find({});

            function iterateFunc(doc: any) {
                console.log(doc);
             }

            function errorFunc(error: any) {
                console.log(error);
             }
            events.forEach(iterateFunc, errorFunc);
        });

        // // closes connection
        res.send(req.body);
    }

public getEventbyCategory(req: express.Request, res: express.Response): void {
    EventController.database.connect(() => {
        const Users = EventController.database.getClient().db("vibe").collection("event")
          .find({category : req.params.category})
          // .find({email : req.params.userEmail})
          .toArray()
          .then((result: any) => {
            res.json(result);
          });
    });
  }

}
