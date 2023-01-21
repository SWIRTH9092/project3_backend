### Project3 API Backend

##### Links
- GitHub: https://github.com/SWIRTH9092/project3_backend
- Render: https://project3bkend.onrender.com

##### Dependencies
- Node
- Express
    - dotenv
    - Mongoose
    - Express
    - Cors
    - Morgan

##### BookMark Mongoose Database Model 
-   database name:  
        place  
-   Schema
    title: {type: String},
    category: {type: String},
    url: {type: String}

#### Routes 

| Routes | Method | EndPoints | Expected Result |
|--------|--------|-----------|-----------------|
| Index | GET | /place | Gets all entries |
| Create | POST | /place | Creates a new entry |
| Show | GET | /place:id | Gets 1 entry
| Update | PUT | /place:id | Updates Existing Entry |
| Delete | DELETE | /place:id | Removes entry from database
