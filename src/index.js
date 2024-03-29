const dotenv=  require('dotenv');
dotenv.config();
const{PORT} = require('./config/serverConfig')

const express= require("express");
const bodyParser= require("body-parser");
const apiRoutes= require("./routes/index");

const app= express(); 

const setupAndStartServer = async()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/bookingservice/api", apiRoutes);// from api_gateway

    app.listen(PORT, async()=>{
        console.log(`Server Running at PORT : ${PORT}`);
        
    });
}

setupAndStartServer();