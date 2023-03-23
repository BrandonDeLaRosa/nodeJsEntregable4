const Conversations = require('../models/conversations.model');
const Users = require('../models/users.model');
const Messages = require('../models/messages.model');
const Participants = require('../models/participants.model');


class conversationServices {

    static async createConver( participant,newConversation){
       try {
        const conver = await Conversations.create(newConversation)
        await Participants.create({conversationId: conver.id, userId: conver.userId})
        await Participants.create({userId: participant, conversationId: conver.id })
        return conver
       } catch (error) {
        throw(error)
       }
    }

    static async getAllConver(){
        try {
            const convers = await Conversations.findAll()
            return convers
        } catch (error) {
            throw(error)
        }
    }

    static async getInfo(idCon){
        try {
            // console.log(idCon);
            const info = await Conversations.findByPk(idCon,
                {
                    attributes:{exclude:
                    ["createdAt","updatedAt"]},
                    
                    include: [
                        {
                            model:Users, attributes:["id","username"]
                        },
                        {
                            model: Messages, attributes:{
                                exclude:[
                                    "createdAt","updatedAt",
                                    "conversationId",
                                    "userId" ,"id" 
                                ]
                            },
                            
                            include:[{
                                model:Users, attributes:["username"]
                            }]
                        }
                    ]
                }
                )
            return info
        } catch (error) {
            throw(error)
        }
    }

}

module.exports = conversationServices;