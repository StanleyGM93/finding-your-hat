const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field) {
		this.field = field;
		let horizontalLocation = 0;
		let verticalLocation = 0;
		let currentLocation = field[verticalLocation][horizontalLocation];
		let outerBoundVertical = verticalLocation.length;
		let outerBoundHorizontal = horizontalLocation.length;
		let isGameCurrent = true;
	}
	print() {
		return this.field.join("\n");
	}
	moveResult(character) {
		if (character === hat) {
			console.log("You have won the game");
			return isGameCurrent === false;
		} else if (character === hole) {
			console.log("Oh no! You've fallen into a hole");
			return isGameCurrent === false;
		} else if (character === fieldCharacter) {
			myField.currentLocation = pathCharacter;
		} else {
			console.log("How did we end up here???");
		}
	}
	moveRight() {
		if (horizontalLocation <= outerBoundHorizontal) {
			horizontalLocation++;
			this.moveResult(this.field.currentLocation);
		} else {
			console.log("You've fallen out of bounds");
			return isGameCurrent === false;
		}
	}
	moveLeft() {
		if (horizontalLocation >= 0) {
			horizontalLocation--;
			this.moveResult(this.field.currentLocation);
		} else {
			console.log("You've fallen out of bounds");
			return isGameCurrent === false;
		}
	}
	moveUp() {
		if (verticalLocation >= 0) {
			verticalLocation--;
			this.moveResult(this.field.currentLocation);
		} else {
			console.log("You've fallen out of bounds");
			return isGameCurrent === false;
		}
	}
	moveDown() {
		if (verticalLocation <= outerBoundVertical) {
			verticalLocation++;
			this.moveResult(this.field.currentLocation);
		} else {
			console.log("You've fallen out of bounds");
			return isGameCurrent === false;
		}
	}
}

const myField = new Field([
	["*", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);

const playGame = () => {
	do {
		myField.print();

		let userInput = prompt("Which way?");
		if (userInput === "r" || "R" || "right" || "Right") {
			moveRight();
		} else {
			console.log("This isn`t working :(");
		}
	} while (isGameCurrent);
};

playGame();
console.log(myField.print());
