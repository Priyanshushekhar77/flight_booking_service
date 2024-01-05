const express = require("express");
const { BookingController }  = require("../../controllers/index");

const router = express.Router();

const bookingController = new BookingController();

router.post("/booking", bookingController.createBooking);


module.exports= router;