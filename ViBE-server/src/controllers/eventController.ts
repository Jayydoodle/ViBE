import express from "express";
import {VibeDatabase} from "../vibe.database";

export class EventController {

    private static database: VibeDatabase = new VibeDatabase();

    // function to create event
    public createEvent(req: express.Request, res: express.Response): void {

      EventController.database.connect(() => {
         EventController.database.getClient().db("vibe").collection("collection").insert(
              req.body
              ); // inserts into database
         });
      // // closes connection
      res.send(req.body);
    }

    public eventInfo(req: express.Request, res: express.Response): void {

        EventController.database.connect(() => {
           EventController.database.getClient().db("vibe").collection("collection").insert(
                req.body
                ); // inserts into database
           });
        // // closes connection
        res.send(req.body);
    }

    public updateEvent(req: express.Request, res: express.Response): void {

        EventController.database.connect(() => {
           EventController.database.getClient().db("vibe").collection("collection").insert(
                req.body
                ); // inserts into database
           });
        // // closes connection
        res.send(req.body);
    }

    public deleteEvent(req: express.Request, res: express.Response): void {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(
                req.body
                ); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }

    public getEventbyZip(req: express.Request, res: express.Response): void {

        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(
                req.body
                ); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }

    public getEventsbyState(req: express.Request, res: express.Response): void {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(
                req.body
                ); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }
}
