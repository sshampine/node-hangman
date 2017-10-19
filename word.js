var Letter = require("./letter");

var Word = function (wrd) {
	this.word = wrd;
	this.letters = [];
	this.getLetters = function() {
		for (var i = 0; i < this.word.length; i++) {
			var newLetter = new Letter(this.word[i]);
			this.letters.push(newLetter)
			console.log(newLetter);
		}
	}
}

//var test = new Word("apple");

//test.getLetters();



module.exports = Word;