const mongoose = require('mongoose');
const {
    User, Thought
} = require('./model');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/socialNetworkDB');
    await User.deleteMany({});
    await Thought.deleteMany({});
    // await Reaction.deleteMany({});
    

    process.exit(0);
};

seedDb();