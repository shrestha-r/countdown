const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true
  },
  eventDate: {
    type: Date,
    required: true
  },
  displayUnits: {
    years: { type: Boolean, default: false },
    months: { type: Boolean, default: false },
    weeks: { type: Boolean, default: false },
    days: { type: Boolean, default: true },
    hours: { type: Boolean, default: true },
    minutes: { type: Boolean, default: true },
    seconds: { type: Boolean, default: true }
  }
});

module.exports = mongoose.model("Event", eventSchema);
