const Users = require('../models/users.model');
const Conversations = require('../models/conversations.model');
const Messages = require('../models/messages.model')

class UsersServices {

        static async getUserAuth(username){
            try {
                const user = await Users.findOne({
                    where: { username }
                });
                return user;
            } catch (error) {
             throw error   
            }
        }
    

    static async getAllUsers() {
        try {
            const users = await Users.findAll()
            return users
        } catch (error) {
            throw(error)
        }
    }

    static async createNewUser(newUser){
        try {
            const creating = await Users.create(newUser)
            return creating

       } catch (error) {
        throw(error)
       } 
    }

    static async getUserCon(userId){
        try {
            const userConver = await Users.findByPk(userId,
                {
                attributes:["username"],
                 include: [
                    {
                        model: Messages,include:[{
                            model:Conversations,attributes: ["id","title"]
                        }],attributes:["content"]
                    }
                 ]   
                })
            return userConver
        } catch (error) {
            throw(error)
        }
    }
}

module.exports = UsersServices;