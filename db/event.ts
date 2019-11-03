import * as mongoose from "mongoose";
import { connect, model } from "mongoose";

// const mongoose = require('mongoose'),//imports mongodb
const Schema = mongoose.Schema;

// event table, that stores name of event and also
// total number of ppl attending.
const eventSchema: mongoose.Schema = new Schema({
  attendees: Number,
  eventname: String
});

// decrease number of participants
eventSchema.methods.removeParticipant = function(cb: any) {

<<<<<<< HEAD
//decrease number of participants 

=======
        if (this.attendees > 0) {
          this.attendees -= 1;
          this.save(cb);
        }
};

// increase number of participants
eventSchema.methods.addParticipant = function(cb: any) {

    this.attendees -= 1;
    this.save(cb);
};
>>>>>>> 426371e054f84b53fdaa9d6a9a4f560b893a3e48

eventSchema.methods.toJson = function() {
    return {
      attendees: this.attendees,
      eventname: this.evemtname,
<<<<<<< HEAD
      attendees:this.attendees,
    }
  }
=======
    };
  };

export const BookSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true }
  });

const Book = model("Book", BookSchema);
export default Book;
module.exports = mongoose.model("event", eventSchema);
>>>>>>> 426371e054f84b53fdaa9d6a9a4f560b893a3e48
