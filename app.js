const express = require('express');
const app = express();
const path = require('path');
const cons = require('consolidate');
const ejs = require('ejs');

const viewPath = path.join(__dirname, 'views');
const port = 3000;

app.use(express.static('static'));
app.use(express.static(path.join(__dirname, 'static')))

app.engine('html', cons.swig);
app.set('views', viewPath);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
}); 

app.get('/flashcards', (req, res) => {
    res.render('flashcards')
})





app.listen(port);
console.log('Server started');