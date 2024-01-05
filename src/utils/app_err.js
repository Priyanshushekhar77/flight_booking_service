//general error handling

class ApiError extends Error {
    constructor(
        name,
        message,
        explanation,
        statusCode
    ){
        this.name = name;
        this.message=message;
        this.explanation = explanation;
        this.statusCode= statusCode;
    }

}

module.exports = ApiError;