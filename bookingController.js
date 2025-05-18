const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      user: req.user.id,
      flight: req.body.flight,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};