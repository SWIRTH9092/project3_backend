//----------------------------
//  Import dependencies
//----------------------------
// const express = require("express")

// for MongoDB database
const Place = require("../../models/place")

/ {
        //  create place
    const placePost = async (req, res) => {
    try res.json (await Place.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};




//----------------------------
//  Export controller function
//----------------------------

module.exports = placePost         