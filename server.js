const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB')
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => console.log(err));

    
