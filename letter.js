var Letter = function (character) {
	this.ltr = character;
	this.isThere = false;
	this.letterRender = function() {
		if (this.ltr == " ") {
			this.isThere = true;
			//console.log("a space ")
			return " "; //returns a blank for blank
			
		}
		if (this.isThere === false) {
			//console.log(" _ ")
			return " _ "; //returns _ for letter
			
		} else {
			//console.log(this.ltr)
			return this.ltr; //returns letter
			
		}
	}
}

//var test = new Letter(" ");

//test.letterRender()

//exports to word.js
module.exports = Letter; 