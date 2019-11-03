"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const mongoose_1 = require("mongoose");
// const mongoose = require('mongoose'),//imports mongodb
const Schema = mongoose.Schema;
// event table, that stores name of event and also
// total number of ppl attending.
const eventSchema = new Schema({
    attendees: Number,
    eventname: String
});
// decrease number of participants
eventSchema.methods.removeParticipant = function (cb) {
    if (this.attendees > 0) {
        this.attendees -= 1;
        this.save(cb);
    }
};
// increase number of participants
eventSchema.methods.addParticipant = function (cb) {
    this.attendees -= 1;
    this.save(cb);
};
eventSchema.methods.toJson = function () {
    return {
        attendees: this.attendees,
        eventname: this.evemtname,
    };
};
exports.BookSchema = new Schema({
    author: { type: String, required: true },
    title: { type: String, required: true }
});
const Book = mongoose_1.model("Book", exports.BookSchema);
exports.default = Book;
module.exports = mongoose.model("event", eventSchema);
//# sourceMappingURL=event.js.map