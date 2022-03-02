const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        // Use mongoose's objectId data type
        // default value is set to a new objectId
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        // date
        // set default value to the current time stamp
        // use a getter method to format the timestamp on query
    },
});

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;