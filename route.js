var route = function(handler, pathname, response) {
	console.log('got request for ' + pathname);

	if (typeof handler[pathname] === 'function') {
		handler[pathname](response);
	} else {
		console.log('No request handler found for ' + pathname);
		//return '404 not found';
		response.writeHead(404, {'Content-Type': 'text/plain'});
		response.write('404 Not found');
		response.end();
	}

};

exports.route = route;
