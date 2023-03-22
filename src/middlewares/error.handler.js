
const {
    ValidationError,
    DatabaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError
} = require('sequelize')

const logError = (error,req,res,next) => {
    console.log(error);
 next(error)
}

const generalErrorHandler = (error,req,res,next ) =>{
    let { status }  = error;

    return res.status(status || 500).json({
        message: error.message,
        errorName: error.name
    });
};

const ormErrorHandler = (error, req, res , next) => {
    if(
        error instanceof ConnectionError ||
        error instanceof ConnectionAcquireTimeoutError ||
        error instanceof ConnectionRefusedError ||
        error instanceof ConnectionTimedOutError ||
        error instanceof InvalidConnectionError 

    ) {
        return res.status(409).json({   
            name: error.name,
            message: "Database error conection error"
        })
    }

    if(
        error instanceof ValidationError  
    ) {
        return res.status(409).json({
            name : error.name,
            message: error.message,
            error: error.errors
        })
    }
    if(
        error instanceof DatabaseError 
        // error instanceof BaseError
    ) {
        return res.status(409).json({
            name : error.name,
            message: error.message,
            error: error.errors,
            params: error['parameters']
        })
    }

    next(error) //! si el error no corresponde a estos valores, se ira al sig errorHabndler.
};

module.exports = {
    logError,
    generalErrorHandler,
    ormErrorHandler
}