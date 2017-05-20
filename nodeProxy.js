/*var express = require('express');
var httpProxy = require('http-proxy');
//var bodyParser = require('body-parser');

var apiForwardingUrl = 'http://localhost:8090/rest/people';
//var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';

var proxyOptions = {
    changeOrigin: true
};

httpProxy.prototype.onError = function (err) {
    console.log('Erro: '+ err);
};

var apiProxy = httpProxy.createProxyServer(proxyOptions);
console.log('Forwarding API requests to ' + apiForwardingUrl);

var server = express();
server.set('port', 3000);
server.use(express.static(__dirname + '/app'));

server.all("/cinq/*", function(req, res) {
    console.log('yay');
    res.header("Access-Control-Allow-Origin", "*");
    
	apiProxy.web(req, res, {target: apiForwardingUrl});   
    
});

server.use(bodyParser.text({ type: 'text/html' }));
server.use(bodyParser.urlencoded({
    extended: true
}));

server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});*/