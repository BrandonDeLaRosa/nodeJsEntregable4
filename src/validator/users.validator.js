const { check } = require('express-validator');
const validateResult = require ('../utils/validate');


const createUserValidator = [

    check('username', 'El nombre de usuario no debe estar vacio')
        .exists()
        .withMessage('El username debe existir')
        .notEmpty()
        .withMessage("El username no debe estar vacio")
        .isString()
        .withMessage('El username debe ser texto')
        .isLength({min:6, max:30})
        .withMessage('el username debe tener mas de 6 caracteres'),

    check("password", "Error en la contraseña")
        .exists()
        .withMessage('Debes escribir tu contraseña')
        .isString()
        .withMessage('La contraseña debe incluir texto y numeros')
        .isLength({ min: 7 })
        .withMessage('La contraseña debe ser mayor a 7 caracteres'),

    (req, res, next) => {
        validateResult(req, res, next)
    },    
]

module.exports = {
    createUserValidator
}