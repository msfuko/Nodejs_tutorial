var index = function() {
	console.log("request index is called");
	return 'Hello index';
};

var upload = function() {
	console.log("request upload is called");
	return 'Hello upload';
};

exports.index = index;
exports.upload = upload;