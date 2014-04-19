var server = require("./server");
var router = require("./route");
var hanlder = require("./handler");

var handle = {};
handle['/'] = hanlder.index;
handle['/index'] = hanlder.index;
handle['/upload'] = hanlder.upload;

server.start(router.route, handle);