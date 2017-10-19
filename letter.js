var Letter = function (character) {
	if (character === " ") {
		this.blank = " ";
		this.isGuessed = true;
	} else {
		this.blank = "_";
		this.secret = character.toLowerCase();
		this.isGuessed = false;
	}
	this.check = function(guess, callback) {
		if(guess.toLowerCase() === this.secret) {
			this.blank = guess;
			this.isGuessed = true;
			callback(true)
		}
	}
}

//var test = new Letter(" ");

//test.letterRender()

//exports to word.js
module.exports = Letter; 