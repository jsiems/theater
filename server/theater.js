//Theater server file
var path = require('path');

module.exports = {
	initialize: function(app) {
		console.log("Initializing Theater...")
		app.get('/theater', function(req, res){
			res.sendFile(path.join(__dirname, '../client', 'theater.html'));
			console.log("get request for theater");
		});
	}
}