const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services/index");

const {createChannel,publishMessage} = require('../utils/messageQueue')
const {REMAINDER_BINDING_KEY} = require('../config/serverConfig')


const bookingService = new BookingService();

class BookingController{
    constructor(){

    }
    async SendMessageToQueue(req,res) {
        const channel = await createChannel();
        const data = {message:'Success'}
        publishMessage(channel,REMAINDER_BINDING_KEY,JSON.stringify(data));
        return res.status(200).json({
            message:'Successfully published'
        })
    }

   

    async createBooking(req,res){

        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.OK).json({
                data: response,
                message: "Boooking Done Successfully",
                success: true,
                error: {}
            });
        } catch (error) {
            return res.status(error.statusCode).json({
                data: {},
                message: error.explaination,
                success: false,
                error: error
            });
        }
    }
}

module.exports= BookingController;