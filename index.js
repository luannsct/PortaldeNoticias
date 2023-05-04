const bodyParser = require('body-parser');
const express = require('express');
const  path  = require('path');

const app = express();

app.use( bodyParser.json()); //Para suportar JSON ENCODED 
app.use(bodyParser.urlencoded({ //PARA SUPORTAR URLENCODE 
    extended:true
}));

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, '/views'));

//Home
app.get('/',(req,res)=>{
    //verificando se o usuario efetuou alguma busca
    if(req.query.busca == null){
        res.send('home')
    }else{
        res.send('Você buscou por: '+req.query.busca)
    }
})
//Recupera a rota! ex. site/slug
app.get('/:slug',(req,res)=>{
    res.send(req.params.slug);
})


app.listen(5000,()=>{
    console.log('Servidor Online');
})