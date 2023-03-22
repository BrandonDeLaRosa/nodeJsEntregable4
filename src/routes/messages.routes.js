const { Router } = require('express');
const { createMessages, getAllMessages} = require('../controllers/messages.controller')



const router = Router();

router.get('/api/v1/chat/messages', getAllMessages);
router.post('/api/v1/chat/messages', createMessages);

module.exports= router;