var http = require("http");
var url = require("url");

var start = function(route) {
	var onRequest = function(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("request is received, url is " + pathname);

		route(pathname);

		response.writeHead(200, {"Content-type": "text/plain"});
		response.write("request is received, url is " + pathname);
		response.end();
	};

	http.createServer(onRequest).listen(8080);
	console.log("server is started");
};

exports.start = start;