const { Schema, model } = require('mongoose');

// schema is very similar to the "class" that we were creating in Sequelize
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
    },
});

const User = model('User', userSchema);

module.exports = User;