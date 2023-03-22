const { logError, generalErrorHandler, ormErrorHandler} = require('../middlewares/error.handler');

const errorHandlerRouter = (app) => {
    app.use(logError);
    app.use(generalErrorHandler);
    app.use(ormErrorHandler);

    // app.use((error,req,res,next) => {
    //     res.status(400).json(error);
    // })
}

module.exports = errorHandlerRouter;