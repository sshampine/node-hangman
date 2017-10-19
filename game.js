var Word = require("./word");
//var Bank = require("./bank")
var inquirer = require("inquirer");

var hangman = function() {
	var self = this;
 	this.guessRemaining = null;
	//words: Bank.thing.list,
	
	this.newGame = function () {
		inquirer.prompt([
		{
			name: "prompt",
			type: "list",
			choices: ["Yes", "No"],
			message: "Do you want to play?"
		}

		]).then(function(answer) {
		if (answer.prompt === "Yes") {
			//self.gameLogic();
			this.guessRemaining = 10;
			var word = new Word();
			word.getWord(function(letters) {
				word.letters = letters;
				var print = "";
				for (var i = 0; i < letters.length; i++) {
					print += " " + letters[i].blank;

				}
				console.log(print);
				self.gameLogic(word);
			})
		} else {
			console.log("See ya!")
		}
		//console.log(this)

		})
	}

	this.gameLogic = function (word) {
		inquirer.prompt([
		{
			name: "guess",
			type: "input",
			message: "Guess a letter"
		}

		]).then(function(answer) {
			word.checkGuess(answer.guess, function(letters, correct) {
				var print = "";
				for (var i = 0; i < letters.length; i++) {
					print += " " + letters[i].blank;
				}
				if (correct === true) {
					console.log("Correct")
				} else {
					console.log("Wrong!")
					console.log(this.guessRemaining-- + " guess left");
					if (this.guessRemaining <= 0) {
						console.log("You lose. Good day, sir!")
						self.newGame();
					}
				}

				console.log(print);
				if (word.checkWinner()) {
					
					self.gameLogic(word);
				} else {
					console.log("Winner")
				 	self.newGame();

				}
				
				})
			})
		}
	}


	

var game = new hangman();

game.newGame();
