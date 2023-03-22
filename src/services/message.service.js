const Messages = require('../models/messages.model');

class messageServices{

    static async allMsgs(){
        try {
            const msgs = await Messages.findAll()
            return msgs
        } catch (error) {
            throw(error)
        }
    }

    static async createMsg(newMessage){
        try {
            const msg = await Messages.create(newMessage);
            return msg
        } catch (error) {
            throw(error)
        }
    }
}

module.exports= messageServices;