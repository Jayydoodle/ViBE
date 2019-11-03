import express from "express";
import Book from "../db/event";

export class EventController {
    public getEventByLocation(req: express.Request, res: express.Response): void {
        res.send("Hello World");
    }
    public getAllEvents(req: express.Request, res: express.Response): void {
        res.send(req.body);
    }

    public post(req: express.Request, res: express.Response): void {

          const book = new Book(req.body);

          book.save((err: any) => {
              if (err) {
                res.send(err);
              } else {
                res.send(book);
              }
            });
          }

  // perform actions on the collection object

}
