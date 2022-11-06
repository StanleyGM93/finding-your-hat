const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field) {
		this.field = field;
		let horizontalLocation = 0
		let verticalLocation = 0
		let currentLocation = field[verticalLocation][horizontalLocation]
		let isGameOver = false;
	}
	print() {
		return this.field.join("\n");
	}
	moveResult(character) {
		if (character === hat) {
			return "You have won the game"
		} else if (character === hole) {
			return "Oh no! You've fallen into a hole"
		}
	}
}

const myField = new Field([
	["*", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);

do 
//Game stuff in here
while (isGameOver); 

console.log(myField.print());
