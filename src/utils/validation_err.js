const {StatusCodes} = require('http-status-codes')

class ValidationError extends Error {
    constructor(error){
        super();
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(err.message);
        });
        this.name = 'Validation error';
        this.message='Not able to validate the data send by user';
        this.explanation = explanation;
        this.statusCodes = statusCodes;
    }

}

module.exports = ValidationError;