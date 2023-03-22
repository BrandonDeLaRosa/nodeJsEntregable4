const { DataTypes } = require ('sequelize');
const db = require('../utils/database');

const Messages = db.define('messages', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull: false
     },

     content: {
        type: DataTypes.TEXT,
        allowNull: false
     },

     userId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field: "user_id"
    },

    conversationId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field: "conversation_id"
    }
});

module.exports= Messages;