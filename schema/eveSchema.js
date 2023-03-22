import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  club: {
    type: String,
    required: true,
  },
  eventname: {
    type: String,
    required: true,
  },
  eventdesc: {
    type: String,
    required: true,
  },
  eventdate: {
    type: String,
  },
  venue: {
    type: String,
  },
  reglink: {
    type: String,
  },
  eventlink: {
    type: String,
  },
  evePoster: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});


const event = mongoose.model("user", eventSchema);
export default event;
