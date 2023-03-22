const messageServices = require('../services/message.service');

const getAllMessages = async (req,res,next) => {
    try {
        const allMessages = await messageServices.allMsgs()
        res.status(200).json(allMessages)
    } catch (error) {
        next({
            message: error.message,
            name: error.name
           })
    }
}

const createMessages = async (req,res,next) => {
    try {
        const newMessage = req.body;
        const message = await messageServices.createMsg(newMessage);
        res.status(201).json(message);
    } catch (error) {
        next({
            message: error.message,
            name: error.name
           })
    }
}

module.exports = {
    createMessages,
    getAllMessages
}