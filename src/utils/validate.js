const { validationResult } = require("express-validator");

const validateResult = (req,res,next) => {
    try {
        validationResult(req).throw();
        return next()
    } catch (error) {
        next({
            status:400,    //! <-- Todos los errorees de validacion son 400.
            message: "Validation error",
            name: error.array().map((error) => error.msg),
        });
        // res.status(400).json(error.array())
    }
};

module.exports = validateResult;