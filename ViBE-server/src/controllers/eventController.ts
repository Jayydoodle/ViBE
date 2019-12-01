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

    public updateEvent(req: express.Request, res: express.Response): void {
        try {
        EventController.database.connect(() => {
           EventController.database.getClient().db("vibe").collection("event").updateOne(

                {id : req.body.id},
                { $set: {title : req.body.title } },
                { $set: {description : req.body.description } }
                ); // inserts into database
           });
        } catch (e) {
            console.log(e);
        }
        // // closes connection
        res.send(req.body);
    }

// public deleteEvent(req: express.Request, res: express.Response): void {
//     EventController.database.connect(() => {
//         EventController.database.getClient().db("vibe").collection("event").findone
// (
//             req.body
//             ); // inserts into database
//        });
//     // // closes connection
//     res.send(req.body);
// }

    public getAllEvents(req: express.Request, res: express.Response): void {

        EventController.database.connect(() => {
            const events = EventController.database.getClient().db("vibe").collection("event").find({});

            function iterateFunc(doc: any) {
                console.log(JSON.stringify(doc, null, 4));
             }

            function errorFunc(error: any) {
                console.log(error);
             }

            events.forEach(iterateFunc, errorFunc);
        });

        // // closes connection
        res.send(req.body);
    }
}
