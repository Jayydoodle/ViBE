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




eventSchema.methods.toJson = function () {
    return {
      eventname: this.evemtname,
      attendees:this.attendees,
    }
  }