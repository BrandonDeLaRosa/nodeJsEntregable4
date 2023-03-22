const UsersServices = require("../services/user.service");
const bcrypt = require ('bcrypt')

const userLogin = async (req,res,next) => {
    try {
        const {username, password} = req.body;
        const user = await UsersServices.getUserAuth(username);
        if(!user){
            return next({
                status: 400,
                message: "invalid Username",
                name:"user not found"
            })
        }

        const isValid = await bcrypt.compare(password, user.password)
        if(!isValid){
            return next({
                status: 400,
                message:"The password dosen´t match the username",
                error: "Invalid password"
            })
        }

        const {id, name, lastname} = user
        res.json({
            id, name, lastname
        });
    } catch (error) {
        next (error)
    }
}

module.exports = {
    userLogin
}