const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');

const {
    User, Thought
} = require('./model');

const seedDb = async () => {
    await mongoose.connect('mongodb://localhost:27017/socialNetworkDB');
    await User.deleteMany({});
    await Thought.deleteMany({});
    
    const usersToCreate = [
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
        {
            username: faker.internet.userName(),
            email: faker.internet.email(),
        },
    ];

    const users = await User.insertMany(usersToCreate);
    console.log(users);

    process.exit(0);
};

seedDb();