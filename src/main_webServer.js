var express = require('express');

var app = express();

// NOTE_1 ilker - by default express looks for templates in directory "./views", so I do not need to set "views" like below
// app.set('views', './views'); // specify the views dir
app.set('views', './src/views'); // NOTE since "views" dir is not directly under root of project, have to set it here
// NOTE_2 ilker - due to putting the extension .ejs, I do not have to set "view engine" like below
app.set('view engine', 'ejs'); // specify template engine
// NOTE_3 ilker - below allows you to use pure html templates ending with extension .html
app.engine('html', require('ejs').renderFile);

// routes
// set root route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' },
    };
    res.render('./pages/home.ejs', data2template);
});

// set records route
app.get('/square', function(req, res) {
    var data2template = {
        head: { title: 'square page' },
        inputNumber: 123,
        resultNumber: 456
    };
    res.render('pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var data2template = {
        head: { title: 'cube page' },
        inputNumber: 123,
        resultNumber: 456
    };
    res.render('pages/cube.ejs', data2template);
});

// set about route
app.get('/about', function(req, res) {
    // res.status(200).render('about'); // NOTE_4 ilker, if no default "view engine" specified above, this will complain; "No default engine was specied and no extension was provided"
    res.status(200).render('pages/about.html'); // NOTE_3b ilker, this is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});

// set everything else to error page
app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8016, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});