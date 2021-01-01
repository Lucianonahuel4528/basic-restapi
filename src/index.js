const express = require('express');
const app = express();
const morgan=require('morgan')

//settings configuraciones
app.set('port', process.env.PORT /*este codigo es utilizado para que la variable port tome el valor de algun servicio de la nube como ser heroku o azure*/
                || 3000); //creando una variable

//middlewares que es un middleware? procesa datos antes que el servidor los reciba 
app.use(morgan('dev'));//ver por consola que sucede en el servidor
app.use(express.urlencoded({extended:false})); //tratar de entender solo datos sencillos de inputs que vienen de formularios
//para alguna aplicacion externa que nos envia datos a traves de formulario el servidor necesita entenderlo
app.use(express.json()) //le permite a mi servidor recibir en formato json y entenderlos
//routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

//starting the server
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get(`port`)}`);
});


