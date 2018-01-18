'use strict';

const EventEmitter = require('events');

class Clock extends EventEmitter {
	constructor() {
		super();
		this.tickEv();
	}
	tickEv() {
		const scope = this;
		
		setInterval(function() {
			scope.emit('tick');
		}, 1000); // 1 sec interval
	}
}

module.exports = Clock;