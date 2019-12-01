"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vibe_database_1 = require("../vibe.database");
class EventController {
    // function to create event
    createEvent(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("event").insertOne(req.body); // inserts into database
        });
        // // closes connection
        res.send(req.body);
        console.log(req.body);
    }
    eventInfo(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").findone(req.body);
        });
        // // closes connection
        res.send(req.body);
    }
    updateEvent(req, res) {
        try {
            EventController.database.connect(() => {
                EventController.database.getClient().db("vibe").collection("event").updateOne({ id: req.body.id }, { $set: { title: req.body.title } }, { $set: { description: req.body.description } }); // inserts into database
            });
        }
        catch (e) {
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
    getAllEvents(req, res) {
        EventController.database.connect(() => {
            const events = EventController.database.getClient().db("vibe").collection("event").find({});
            function iterateFunc(doc) {
                console.log(JSON.stringify(doc, null, 4));
            }
            function errorFunc(error) {
                console.log(error);
            }
            events.forEach(iterateFunc, errorFunc);
        });
        // // closes connection
        res.send(req.body);
    }
}
exports.EventController = EventController;
EventController.database = new vibe_database_1.VibeDatabase();
//# sourceMappingURL=eventController.js.map