const { Router } = require('express');
const { createMessages, getAllMessages} = require('../controllers/messages.controller');
const { createMessageValidator } = require('../validator/message.validator');


const router = Router();

router.get('/api/v1/chat/messages', getAllMessages);
router.post('/api/v1/chat/messages',  createMessageValidator ,createMessages);

module.exports= router;