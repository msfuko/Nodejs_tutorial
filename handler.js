var exec = require('child_process').exec;

var index = function(response) {
	console.log("request index is called");

        var sleep = function(seconds) {
            var startTime = new Date().getTime();
            while (new Date().getTime() < startTime + seconds);
        };

        // sleep(10000);
	// return 'Hello index';

        //var content = 'empty';
        
        exec('ls -lah', function(error, stdout, stderr) {
            //content = stdout;
	    onResponse(stdout, response);
        });  
};

var upload = function(response) {
	console.log("request upload is called");
	onResponse('Hello upload', response);
};

var onResponse = function(result, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(result);
	response.end();
};

exports.index = index;
exports.upload = upload;
