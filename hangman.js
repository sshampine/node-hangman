var inquirer = require("inquirer");
var word = "brown betty";
var answer = [];

for (var i = 0; i < word.length; i++) {
	if (word[i] == " ") {
		answer[i] = (" ");
	} else {
		answer[i] = ("_")
	}
}



inquirer.prompt([
{
	name: "letter",
	type: "input",
	message: "Please enter a letter"
}

	]).then(function(answers) {
		//console.log(answers)
		//console.log("the word is: " + word)
		//console.log(answer.join(" "))
		for (var j = 0; j < word.length; j++) {
			if (word[j] === answers.letter) {
				//console.log(answers.letter)
				answer[j] = answers.letter
				
			} 
		}	if (word.indexOf(answers.letter) == -1 ) {
				console.log("Guess Again")
			}
			console.log(answer.join(" "))

	})

//console.log(answers)