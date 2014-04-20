var http = require("http");
var url = require("url");

var start = function(route, handler) {
	var onRequest = function(request, response) {
		var pathname = url.parse(request.url).pathname;
                var queryString = url.parse(request.url).query;
		console.log("request is received, url is " + pathname);
		
		// response.writeHead(200, {"Content-type": "text/plain"});
		// response.write(route(handler, pathname));
		// response.end();
                route(handler, pathname, response);

		console.log("request processing is done, url is " + pathname 
                    + ", queryString is " + queryString);
	};

	http.createServer(onRequest).listen(8080);
	console.log("server is started");
};

exports.start = start;
