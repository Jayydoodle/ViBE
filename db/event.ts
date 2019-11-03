import * as mongoose from "mongoose";
import { connect, model } from "mongoose";

//const mongoose = require('mongoose'),//imports mongodb
  const Schema = mongoose.Schema;

//event table, that stores name of event and also 
//total number of ppl attending. 
const eventSchema:mongoose.Schema = new Schema({ 

    eventname: String,
    attendees: Number 
});


//decrease number of participants 
eventSchema.methods.removeParticipant = function(cb){

        if (this.attendees > 0)
        {
          this.attendees-=1;
          this.save(cb)
        }
}

//increase number of participants
eventSchema.methods.addParticipant = function(cb){

    this.attendees-=1;
    this.save(cb)
}



eventSchema.methods.toJson = function () {
    return {
      eventname: this.evemtname,
      attendees:this.attendees,
    }
  }

  export const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true }
  });
  
const Book = model("Book", BookSchema);
export default Book;
  module.exports = mongoose.model('event', eventSchema);
