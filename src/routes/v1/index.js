const express = require("express");
const { BookingController }  = require("../../controllers/index");

const router = express.Router();


const bookingController = new BookingController();
router.get('/info',(req,res) => {
    return res.json({message:'Responds from booking route through api gateway'})
})
router.post("/booking", bookingController.createBooking);
router.post('/publish',bookingController.SendMessageToQueue);


module.exports= router;