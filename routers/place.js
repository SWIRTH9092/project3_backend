//-------------------------------------------
// Import Our Dependencies
//-------------------------------------------
const express = require('express') // bring this in so we can make our router

//-------------------------------------------
// controller dependencies
//-------------------------------------------
const placeIndex = require ("../controllers/place/placeIndex")
const placePost = require("../controllers/place/placePost")
const placeUpdate = require("../controllers/place/placeUpdate")
const placeDelete = require("../controllers/place/placeDelete")
const placeShow = require("../controllers/place/placeShow")

//-------------------------------------------
// create Route
//-------------------------------------------
const router = express.Router() 

//-------------------------------------------
// routers
//-------------------------------------------
//**  note place is no longer specified in the router - 
//    if place was listed here, you would get a 404 - not found
router.get('/', placeIndex);  // get all 
router.post('/', placePost);  // Create New 
router.put('/:id', placeUpdate); //Update Existing
router.delete('/:id', placeDelete)  // delete Existing
router.get('/:id', placeShow)  // Show a specific item

//-------------------------------------------
// Export the Router
//-------------------------------------------
module.exports = router;