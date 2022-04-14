// берём Express
var express = require('express');

// создаём Express-приложение
var app = express();

app.use('/js', express.static('js'));
app.use('/html', express.static('html'));
app.use('/img', express.static('img'));
app.use('/style', express.static('style'));
app.use('/node_modules', express.static('node_modules'));

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res){
    res.sendFile('html/index.html', { root: __dirname });
});

app.use('/public', express.static('public'));

// запускаем сервер на порту 8080
app.listen(8080);
console.log('Сервер стартовал!');