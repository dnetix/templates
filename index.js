var express = require('express');
var app = express();
var path = require('path');
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);

swig.setDefaults({ cache: false });

app.use(express.static(path.resolve(__dirname, './')));

var params = {
    template: 'madmin'
};

app.get('/', function(req, res, next){
    res.render('index', params);
});

app.get('/page/:pagename', function(req, res, next){
    var pagename = req.params.pagename || 'login';
    res.render(pagename, params);
});

var server = app.listen(process.argv[2] || 8080, function(){
    console.log('Express server running on ' + server.address().port);
});