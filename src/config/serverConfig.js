const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT:process.env.PORT,
    MAIL_ID:process.env.MAIL_ID,
    MAIL_PASW:process.env.MAIL_PASW,
    EXCHANGE_NAME:process.env.EXCHANGE_NAME,
    MESSAGE_BROKER_URL:process.env.MESSAGE_BROKER_URL,
    REMAINDER_QUEUE:process.env.REMAINDER_QUEUE,
    REMAINDER_BINDING_KEY:process.env.REMAINDER_BINDING_KEY,

};