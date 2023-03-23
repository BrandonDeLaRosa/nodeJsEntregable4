const conversationServices = require('../services/conversations.service')


const getConver = async (req,res,next) => {
    try {
        const convers = await conversationServices.getAllConver()
        res.status(200).json(convers)
    } catch (error) {
        next({
            message: error.message,
            name: error.name
           })
    }
}

const createConversation = async (req,res,next) => {
    try {
    
        const {participantId, ...newConversation} = req.body;
        const conver = await conversationServices.createConver(participantId ,newConversation);
        res.status(201).json(conver);
    } catch (error) {
       next({
        message: error.message,
        name: error.name
       })
    }
}

const getConvUsersMsgs = async (req,res,next) => {
    try {
        const {conver} = req.params;
        const converInfo = await conversationServices.getInfo(conver);
        res.status(200).json(converInfo)
    } catch (error) {
        next({
            message: error.message,
            name: error.name
           })
    }
}

module.exports = {
    createConversation,
    getConver,
    getConvUsersMsgs
}