const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    // createdAt: {
        // set default value to the current timestamp
        // use a getter method to format the timestamp on query 
    //     type: Date,
    // },
    // username: {
        // the user that created this thought
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'User',
    // },
    reactions: [],
    // an array of nested documents created with the reactionSchema
    // these are like replies
});

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

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;