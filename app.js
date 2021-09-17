const express = require('express');
const app = express();
const path = require('path');
const cons = require('consolidate');
const viewPath = path.join(__dirname, 'views');
const port = 3000;


app.engine('html', cons.swig);
app.set('views', viewPath);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('home')
}); 





app.listen(port);
console.log('Server started');