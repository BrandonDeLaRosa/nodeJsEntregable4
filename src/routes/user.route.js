const { Router } = require ('express');
const {getAllUsers, createUser, getUserConver} = require('../controllers/users.controller');
const { createUserValidator } = require('../validator/users.validator');

const router = Router();

router.get('/api/v1/chat/users', getAllUsers);
router.post('/api/v1/chat/users',createUserValidator, createUser);

router.get('/api/v1/chat/:userId/conversations', getUserConver);

module.exports = router;