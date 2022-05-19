const router = require('express').Router();
const { createUser, getAllUsers, getUserById, updateUserById, deleteUserById, addFriendToUserById, deleteFriendOfUserById } = require('../../../controllers/userController');

router.route('/')
    .post(createUser)
    .get(getAllUsers);

router.route('/:userId')
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);

router.put('/:userId/friends/:friendId', addFriendToUserById);
router.delete('/:userId/friends/:friendId', deleteFriendOfUserById);

module.exports = router;