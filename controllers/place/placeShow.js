//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const Place = require("../../models/place")

const placeShow = async (req, res) => {
    try {
        res.json(await Place.findById(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
};

// const placeShow = (req, res) => {
   
//     res.send("Show place controller (get one item)")
// };


//----------------------------
//  Export controller function
//----------------------------

module.exports = placeShow