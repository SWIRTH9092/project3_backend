//--------------------------------------
// Dependencies
//--------------------------------------

require("dotenv").config();
//get .env variables


//import express
const express = require("express");
const middleware = require("./utils/middleware");

//create application object
const app=express();

//--------------------------------------
//  Middle
//--------------------------------------

middleware(app);

//--------------------------------------
//  Routes
//--------------------------------------

//create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});

//--------------------------------------
//  Listener
//--------------------------------------
const{ PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
