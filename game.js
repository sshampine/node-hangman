var Word = require("./word");
var Bank = require("./bank")
var inquirer = require("inquirer");

var hangman = function() {

	words: Bank.thing.list,
	

	inquirer.prompt([
		{
			name: "letter",
			type: "input",
			message: "enter a letter"
		}

	]).then(function(answers) {
		console.log(this.words)

		})

}

console.log(hangman.word)
console.log(Bank.thing.list)


//var test2 = hangman.word

//var test = new Word("apple");
//test.getLetters();

hangman();

