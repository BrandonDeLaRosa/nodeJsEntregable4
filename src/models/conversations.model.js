const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Conversations = db.define('conversations', {
    id: {
       type: DataTypes.INTEGER,
       primaryKey:true,
       autoIncrement: true,
       allowNull: false
    },

    title: {
        type: DataTypes.STRING(80),
        allowNull: false
    },

    isGroup: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull:false
    },    

    userId: {
        type: DataTypes.INTEGER,
        allowNull:false,
        field: "user_id"
    }
});

module.exports = Conversations;