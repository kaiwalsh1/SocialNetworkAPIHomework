const { Schema, model } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema({
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
//         type: Schema.Types.ObjectId,
//         default: () => new Types.ObjectId(),
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
//         type: Date,
//         default: Date.now,
//         get: (createdAtValue) => {
//             return moment(createdAtValue).format('MM/DD/YYYY hh:mm a');
//         }
//     },
// });

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;