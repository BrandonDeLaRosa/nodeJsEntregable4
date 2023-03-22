const express = require('express');
const cors = require ('cors');
const morgan = require ('morgan');
const db = require('./utils/database');
const initModels = require('./models/initModels')
const UserRoutes = require('./routes/user.route');
const conversationsRoutes = require ('./routes/conversations.route');
const messagesRoutes = require('./routes/messages.routes');
const authRoutes = require ('./routes/auth.route')
const errorHandlerRouter = require('./routes/errorHandler.routes');


initModels();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

db.authenticate()
.then(() => {
    console.log('Conexion exitosa OK');
})
.catch((error) => {
    console.log(error);
});

db.sync()
// db.sync({force:true})
// db.sync({alter:true})

.then(() => {
    console.log('Base de datos sincronizada :)');
})
 .catch((error) => {
    console.log(error);
 })

const PORT = 8000;

app.use(UserRoutes);
app.use(conversationsRoutes);
app.use(messagesRoutes);
app.use(authRoutes);

app.get('/', (req,res) => {
    res.send('welcome to my api')
});

errorHandlerRouter(app);

app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});