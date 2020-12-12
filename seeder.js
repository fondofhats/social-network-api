const seeder = require('mongoose-seed');
const Users = require('./models/Users');
 
// Connect to MongoDB via Mongoose
const db = "mongodb://localhost/social-network-api";
seeder.connect(db, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    "models/Users"
  ]);
   // Clear specified collections
   seeder.clearModels(['Users'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});

 
const data = [{
    'model': 'Users',
    'documents': [
        {
            'username':'fondofhats',
            'email': 'fondofhats@gmail.com'
        },
        {
            'username': 'DrGroovy',
            'email': 'drgroovy@gmail.com'
        }
    ]

}];