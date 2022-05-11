const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUserById } = require('../../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);

router.route('/:userId')
    .get(getUserById)
    .put(updateUserById);

module.exports = router;