require('dotenv').config()
const mongoose = require('./connection')
const Place = require('./place')

//  ran seeds with terminal command: node models/seed.js
mongoose.connection.on('open', () => {

    // define data we want to put in the database
    const startingPlace =  [
        { title: "Tahquamenon Falls - Michigan",
          category: "Falls",  
          url: "https://www.istockphoto.com/photo/tahquamenon-falls-gm586196098-100625025"  },
        { title: "Crisp Point Lighthouse - Michgian",
          category: "Lighthouse",
          url: "https://media.istockphoto.com/id/588382034/photo/sunset-at-the-crisp-point-lighthouse.jpg?s=612x612&w=0&k=20&c=YWEeS3QwIpgm6U4kRHG1D-LaKimMQ7ab9ByLCyyqp6I="  },
      ]
            
        // for first time if no data...
            // Create new Place Item once old Place Items are deleted
            // Place.create(startingPlace, (err, data) =>{
            //     mongoose.connection.close();
            // }) 
  
      // Delete all Place Items
      Place.deleteMany({}, (err, data) => {
        // Create new Place Item once old Place Items are deleted
        Place.create(startingPlace, (err, data) =>{
            mongoose.connection.close();
        })
    })    
})
