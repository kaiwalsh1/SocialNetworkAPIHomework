const mongoose = require('mongoose');
const {
    User, Reaction, Thought
} = require('./model');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/socialNetworkDB');
    await User.deleteMany({});
    // await Reaction.deleteMany({});
    // await Thought.deleteMany({});

    process.exit(0);
};

seedDb();