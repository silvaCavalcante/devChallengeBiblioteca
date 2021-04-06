const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParses = require('body-parser');


const rotaObras = require('./routes/obras');

app.use(morgan('dev'));
app.use(bodyParses.urlencoded({ extended: false})); //apenas dados simples
app.use(bodyParses.json()); //json de entrada no body (padrão)

//Configuração CORS
app.use((req , res , next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );

        if(req.method === 'OPTIONS'){
            res.header('Access-Control=Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return res.status(200).send({});
        }
        next();
});


app.use('/obras', rotaObras);

app.use((req , res , next) => {
    const erro = new Error('rota não encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req , res , next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});


module.exports = app;