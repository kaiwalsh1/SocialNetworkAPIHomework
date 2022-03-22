const { Schema, model } = require('mongoose');

// schema is very similar to the "class" that we were creating in Sequelize
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: {
            validator: function(value) {
                return isEmail(value);
            },
            message: function(userObject) {
                return `${userObject.email} is not a valid email address`;
            },
        // },
    },
    // thoughts: {
    //     type: String,
    // },
    // friends: {
    //     type: String,
    // },
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;