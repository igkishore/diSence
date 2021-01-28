var express = require('express');
var mongoose = require('mongoose');

var port = (process.env.port || 8080);
var app = express();
app.set("port",port);
app.listen(port);

app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/',(req,res)=>
{
    res.render('index');
});

app.get('/services',(req,res)=>
{
    res.render('services');
});
app.use((req, res) => {
    res.status(404).render('404');
  });