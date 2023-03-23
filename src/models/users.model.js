const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const bcrypt = require('bcrypt')

const Users = db.define('users', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },

    firstname: {
        type: DataTypes.STRING(25),
        defaultValue:"john"
    },

    lastname: {
        type: DataTypes.STRING(25),
        defaultValue:"doe"
    },

    username: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique:true
    },

    password: {
        type: DataTypes.STRING,
        allowNull:false
    },

    conversationId: {
        type: DataTypes.INTEGER,
        // allowNull: false,
        field: "conversation_id"
    }

},
{
    timestamps:false,
    hooks:{
        beforeCreate: async (User) => {  //! <-- El parametro es una instancia de req.body.
            try {
                const salt = await bcrypt.genSalt(10);
                const passwordHash = await bcrypt.hash(User.password, salt);
                User.password = passwordHash
            } catch (error) {
                next({
                    status: 500,
                    message: error.message,
                    name: error.name
                })
            }
        }
    }
});

module.exports = Users;