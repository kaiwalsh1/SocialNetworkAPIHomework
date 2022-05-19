const moment = require('moment');
const { Thought, User } = require('../model');

module.exports = {
    createThought: async (req, res) => {
        const { thoughtText, createdAt, username } = req.body;
        try {
            const newThought = await Thought.create({
                thoughtText,
                createdAt,
                username
            });
            res.json(newThought);
        } catch (e) {
            res.json(e);
        }
    },

    getAllThoughts: async (req, res) => {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (e) {
            res.json(e);
        }
    },

    getThoughtById: async (req, res) => {
        const { thoughtId } = req.params;
        try {
            const thought = await Thought.findById(thoughtId);
            res.json(thought);
        } catch (e) {
            res.json(e);
        }
    },

    updateThoughtById: async (req, res) => {
        const { thoughtId } = req.params;
        try {
            const updatedThought = await Thought.findByIdAndUpdate(
                thoughtId,
                {...req.body},
                {
                    new: true,
                }
            );
            res.json(updatedThought);
        } catch (e) {
            res.json(e);
        }
    },

    deleteThoughtById: async (req, res) => {
        const { thoughtId } = req.params;
        try {
            const deletedThought = await Thought.findByIdAndDelete(thoughtId);
            res.json(deletedThought);
        } catch (e) {
            res.json(e);
        }
    },

    addReactionToThoughtById: async (req, res) => {
        const { thoughtId } = req.params;
        const { reactionBody, username } = req.body;
        try {
            const updatedThought = await Thought.findByIdAndUpdate(thoughtId,
                {
                    $push: {
                        reactions: {
                            reactionBody,
                            username
                        }
                    },
                },
                {
                    new: true,
                }
            );
            res.json(updatedThought);
        } catch (e) {
            res.json(e);
        }
    },

};