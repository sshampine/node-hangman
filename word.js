var Letter = require("./letter");
var Bank = require("./bank")

var Word = function (wrd) {
	this.letters = [];
	this.getWord = function(callback) {
		var randomNumber = Math.floor(Math.random()* Bank.thing.list.length);
		var randomWord = Bank.thing.list[randomNumber];
		console.log(randomWord)
		var letterArray = [];
		for (var i = 0; i < randomWord.length; i++) {
			var newLetter = new Letter(randomWord[i]);
			letterArray.push(newLetter)
		}
	this.letters = letterArray;
	callback(this.letters)

	};

	this.checkGuess = function(guess, callback) {
		var goodGuess = false;
		for (var j = 0; j < this.letters.length; j++) {
			this.letters[j].check(guess, function(correct) {
				if(correct === true) {
					goodGuess = true
				}
			})
		}
		callback(this.letters, goodGuess);
	};


	this.checkWinner = function() {
		//console.log(this.letters)
		var test = 0;
		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].isGuessed == false) {
				test++;
			}
		}
		return test;
	};


}


module.exports = Word;