const {booking} = require('../models/index');
const {StatusCodes} = require('http-status-codes');
const {AppError,ValidationError} = require('..utils.index');

class bookingRepository {

    async create(data) {
        try{
           const booking = booking.create(data);
           return booking;
        }
        catch(error){
            if(error.name ==='SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw AppError(
                'RepositoryError',
                'cannot create booking',
                'issue in creating a booking try again after sometime',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }

    async update(data){
       
    }


}

module.exports = bookingRepository;