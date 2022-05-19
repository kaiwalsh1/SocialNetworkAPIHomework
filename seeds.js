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

    const thoughtsToCreate = [
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
        {
            thoughtText: faker.lorem.sentence(),
            createdAt: faker.date.past(),
            username: users[Math.floor(Math.random() * users.length)].username,
        },
    ];

    const thoughts = await Thought.insertMany(thoughtsToCreate);
    console.log(thoughts);

    console.log('Database seeded');

    process.exit(0);
};

seedDb();