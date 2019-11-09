"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vibe_database_1 = require("../vibe.database");
class EventController {
    // function to create event
    createEvent(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(req.body); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }
    eventInfo(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(req.body); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }
    updateEvent(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(req.body); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }
    deleteEvent(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(req.body); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }
    getEventbyZip(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(req.body); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }
    getEventsbyState(req, res) {
        EventController.database.connect(() => {
            EventController.database.getClient().db("vibe").collection("collection").insert(req.body); // inserts into database
        });
        // // closes connection
        res.send(req.body);
    }
}
exports.EventController = EventController;
EventController.database = new vibe_database_1.VibeDatabase();
//# sourceMappingURL=eventController.js.map