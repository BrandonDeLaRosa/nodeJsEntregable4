const { Router } = require('express');
const { createConversation, getConver, getConvUsersMsgs } = require('../controllers/conversations.controller');
const { createConversationValidator } = require('../validator/conversations.validator');

const router = Router();

router.post('/api/v1/chat/conver', createConversationValidator, createConversation);

router.get('/api/v1/chat/conver', getConver);

router.get('/api/v1/chat/:conver/users/mgs', getConvUsersMsgs);



module.exports = router;