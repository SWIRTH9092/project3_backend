//----------------------------
//  Import dependencies
//----------------------------

// for MongoDB database
const Place = require("../../models/place")


// const placeUpdate = (req, res) => {
//     res.send("Update place controller (put)")
// };

const placeUpdate = async (req, res) => {
    try {
        //  update place
        res.json (
            await Place.findByIdAndUpdate(req.params.id, req.body, {new: true}));
    } catch (error) {
        //send error
        res.status(400).json(error)
    }
};


//----------------------------
//  Export controller function
//----------------------------

module.exports = placeUpdate