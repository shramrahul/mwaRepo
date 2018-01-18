const Clock = require('./clock'),
		tickEvent = new Clock();

tickEvent.on('tick', function() {
	console.log("woohoo");
});