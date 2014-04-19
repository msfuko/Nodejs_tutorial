var index = function() {
	console.log("request index is called");
};

var upload = function() {
	console.log("request upload is called");
};

exports.index = index;
exports.upload = upload;