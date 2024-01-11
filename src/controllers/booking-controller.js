const { StatusCodes } = require("http-status-codes");
const { BookingService } = require("../services/index");

const {createChannel,publishMessage} = require('../utils/messageQueue')
const {REMAINDER_BINDING_KEY} = require('../config/serverConfig')


const bookingService = new BookingService();

class BookingController{
    constructor(){

    }
    async SendMessageToQueue(req,res) {
      try{
        const channel = await createChannel();
        const payload  = {
            data:{
                subject:'notification from queue',
                content:'Subscribe these data',
                recepientEmail:'way6shekhargmail.com',
                notificationTime:'2024-01-11 05:24:00'
            },
            service:'BOOK_TICKET'
            
        };
        publishMessage(channel,REMAINDER_BINDING_KEY,JSON.stringify(payload));
        return res.status(200).json({
            message:'Successfully published',
        });
      }
      catch(error){
            console.log(error);
            return res.status(500).json({
                message:"Unsuccessful"
            });
      }
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