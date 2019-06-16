var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.use('/images', express.static('images'));
app.use('/scripts', express.static('scripts'));
app.use('/styles', express.static('styles'));



app.get('/', (req, res)=>{
  res.render('index');
});

app.get('/About', (req, res)=>{
  res.render('About');
});

app.get('/Contact', (req, res)=>{
  res.render('contact');
});

app.get('/Projects', (req, res)=>{
  res.render('projects');
});

app.listen(3000);
