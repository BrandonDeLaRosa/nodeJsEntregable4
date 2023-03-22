const Conversations = require("./conversations.model")
const Messages = require("./messages.model");
const Participants = require("./participants.model");
const Users = require("./users.model")



const initModels = () => {


    // Quien crea las conversaciones.
    Users.hasMany(Conversations, {foreingkey:'userId'})
    Conversations.belongsTo(Users, {foreignKey:'userId'})

    // Quien escribe los mensajes.

    Users.hasMany(Messages, {foreignKey: 'userId'})
    Messages.belongsTo(Users, {foreignKey:'userId'})

    // Mensajes en las conversaciones.

    Conversations.hasMany(Messages, {foreignKey:'conversationId'})
    Messages.belongsTo(Conversations, {foreignKey:'conversationId' })

    // TODO Tabla pivote.

    Users.hasMany(Participants, {foreignKey:'userId'});
    Participants.belongsTo(Users,{ foreignKey:'conversationId'});

    Conversations.hasMany(Participants,{foreignKey:'conversationId'});
    Participants.belongsTo(Conversations,{foreignKey:'conversationId'});
};

module.exports = initModels;