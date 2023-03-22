const { check, param } = require('express-validator');
const validateResult = require('../utils/validate');

const createConversationValidator = [
    check('title', 'La conversacion debe tener un titulo')
    .exists()
    .withMessage('El titulo debe existir')
    .notEmpty()
    .withMessage('el titulo no puede ir vacio')
    .isString()
    .withMessage('El titulo debe ser texto')
    .isLength({min: 3, max: 80})
    .withMessage('La longitud debe estar entre 3 y 30 caracteres'),


    // param('id').isInt().withMessage('El id debe ser nuemr')
    check('userId', "Debes proporcionar el usuario que creara la conversacion.")
    .isInt()
    .withMessage('El numero de id debe ser un numero entero')
    .exists()
    .withMessage('El numero debe existir')
    .notEmpty()
    .withMessage('Debes ingresgar un valor numerico'),

    (req,res,next) => {
        validateResult(req,res,next)
    }
]

module.exports = {
    createConversationValidator
}