const router = require('express').Router();
const { createThought, getAllThoughts, getThoughtById, updateThoughtById } = require('../../../controllers/thoughtController');

router.route('/')
    .post(createThought)
    .get(getAllThoughts);

router.route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById);

module.exports = router;