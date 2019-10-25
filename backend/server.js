const express = require('express');
const app = express();
const port = 3030;
const routes = require('./routes');

app.use(routes);

app.listen(port, (err) => {
    if(err){
        console.log('Houve um erro ao iniciar o servidor');
    }else{
        console.log(`Servidor rodando na porta ${port}`);
    };
});