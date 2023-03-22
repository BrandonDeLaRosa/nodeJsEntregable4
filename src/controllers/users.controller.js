const UsersServices = require("../services/user.service");


const getAllUsers = async (req,res,next) => {
    try {
        const users = await UsersServices.getAllUsers();
        res.json(users)
    } catch (error) {
         next({
        message: error.message,
        name: error.name
       })
    }

}    

const createUser = async (req,res,next) => {
    try {
        const newUser = req.body;
        const user = await UsersServices.createNewUser(newUser)
        res.status(201).json(user)
    } catch (error) {
         next({
        message: error.message,
        name: error.name
       })
    }
}


const getUserConver = async (req,res,next) => {
    try {
        const {userId} = req.params;
        const conver = await UsersServices.getUserCon(userId);
        res.status(200).json(conver)
    } catch (error) {
        next({
        message: error.message,
        name: error.name
       }) 
    }
}
    module.exports = {
        getAllUsers,
        createUser,
        getUserConver
    };