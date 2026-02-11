const express = require("express");
const Event = require("../models/Event");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create event
router.post("/", auth, async (req, res) => {
  const { title, eventDate } = req.body;

  const event = new Event({
    user: req.user,
    title,
    eventDate
  });

  await event.save();
  res.json(event);
});

// Get user events
router.get("/", auth, async (req, res) => {
  const events = await Event.find({ user: req.user });
  res.json(events);
});

// Delete event
router.delete("/:id", auth, async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
});

module.exports = router;
