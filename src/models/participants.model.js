const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Participants = db.define('participants',{
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

module.exports = Participants;