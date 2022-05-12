const moment = require('moment');
const { Thought } = require('../model');

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

};