"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("../db/event"));
class EventController {
    getEventByLocation(req, res) {
        res.send("Hello World");
    }
    getAllEvents(req, res) {
        res.send(req.body);
    }
    post(req, res) {
        const book = new event_1.default(req.body);
        book.save((err) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(book);
            }
        });
    }
}
exports.EventController = EventController;
//# sourceMappingURL=eventController.js.map