const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = require("./config")
const db = require('./db');

const rest = require("./REST")

const app = express();

//middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("client"));
app.use("/rest", rest);

//establish connection with database and server
db.connect().then(() => {
    app.listen(config.port, function () {
        console.log(`Server is listening on :${config.port}`);
    });
});