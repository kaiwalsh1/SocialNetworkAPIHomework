const { Schema, model } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema({
    userId: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => {
            return moment(createdAtVal).format('MM/DD/YYYY hh:mm a');
        }
    },
    username: {
        type: String,
        required: true,
    },
    // reactions: [reactionSchema],
    
    // an array of nested documents created with the reactionSchema
    // these are like replies
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});



// const reactionSchema = new Schema({
//     reactionId: {
//         // Use mongoose's objectId data type
//         // default value is set to a new objectId
//     },
//     reactionBody: {
//         type: String,
//         required: true,
//         maxLength: 280,
//     },
//     username: {
//         type: String,
//         required: true,
//     },
//     createdAt: {
//         // date
//         // set default value to the current time stamp
//         // use a getter method to format the timestamp on query
//     },
// });

// thoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;