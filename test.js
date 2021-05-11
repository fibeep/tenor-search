// MODEL

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name : { type : String, required: true},
    startDate : { type : Date},
    numAtendees : { type : Number},
    booleanField : { type : Boolean }
})

// QUERIES

