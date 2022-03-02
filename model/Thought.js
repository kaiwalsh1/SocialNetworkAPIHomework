const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
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

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;