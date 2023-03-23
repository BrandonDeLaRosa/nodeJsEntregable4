const { check } = require('express-validator');
const validateResult = require ('../utils/validate');

const createMessageValidator = [
    check('content', 'El mensaje debe contener un contenido.')
    .exists()
    .withMessage('El contenido debe existir')
    .notEmpty()
    .withMessage('El contenido no puede ir vacio')
    .isString()
    .withMessage('El contenido debe ser texto'),
    
    (req,res,next) => {
        validateResult(req,res,next)
    }
]

module.exports ={
    createMessageValidator
}
