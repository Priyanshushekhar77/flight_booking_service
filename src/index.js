const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const apiroutes = require('./routes/index');
PORT=5000



const setupandstartserver = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use('/api',apiroutes);

    app.listen((PORT), async() => {
        console.log(`server start at port:${PORT}`);
    })
}

setupandstartserver();