'use strict';

class Musician {
	constructor(name) {
  		this.name = name;
  	}
  	play(piece) {
  		console.log(this.name + " is now playing " + piece);
  	}
}

let Violinist = new Musician("Dewan");
let Pianist = new Musician("Beky");

Violinist.play("violen");
Pianist.play("piano");