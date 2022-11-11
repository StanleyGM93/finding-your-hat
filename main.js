const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";
let isGameCurrent = true;

class Field {
	constructor(field) {
		this.field = field;
		this.horizontalLocation = 0;
		this.verticalLocation = 0;
		this.currentLocation =
			this.field[this.verticalLocation][this.horizontalLocation];
	}

	print() {
		console.log(this.field.join("\n"));
	}
	printCharacter() {
		return this.field[this.verticalLocation][this.horizontalLocation];
	}
	moveResult(character) {
		if (character === hat) {
			console.log("You have found your hat!");
			return (isGameCurrent = false);
		} else if (character === hole) {
			console.log("Oh no! You've fallen into a hole");
			return (isGameCurrent = false);
		} else if (character === fieldCharacter) {
			this.field[this.verticalLocation][this.horizontalLocation] =
				pathCharacter;
		} else {
			console.log("How did we end up here???");
		}
	}
	moveRight() {
		this.horizontalLocation++;
		let outerBoundHorizontal = this.field[0].length;
		if (this.horizontalLocation < outerBoundHorizontal) {
			this.moveResult(this.printCharacter());
		} else {
			console.log("You've fallen out of bounds");
			isGameCurrent = false;
			return isGameCurrent;
		}
	}
	moveLeft() {
		this.horizontalLocation--;
		if (this.horizontalLocation >= 0) {
			this.moveResult(this.printCharacter());
		} else {
			console.log("You've fallen out of bounds");
			isGameCurrent = false;
			return isGameCurrent;
		}
	}
	moveUp() {
		this.verticalLocation--;
		if (this.verticalLocation >= 0) {
			this.moveResult(this.printCharacter());
		} else {
			console.log("You've fallen out of bounds");
			isGameCurrent = false;
			return isGameCurrent;
		}
	}
	moveDown() {
		this.verticalLocation++;
		let outerBoundVertical = this.field.length;
		if (this.verticalLocation < outerBoundVertical) {
			this.moveResult(this.printCharacter());
		} else {
			console.log("You've fallen out of bounds");
			isGameCurrent = false;
			return isGameCurrent;
		}
	}
	generateField(height, width) {}
}

const myField = new Field([
	["*", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);

const playGame = () => {
	do {
		myField.print();

		let userInput = prompt("Which way? ");
		if (userInput === "r") {
			myField.moveRight();
		} else if (userInput === "l") {
			myField.moveLeft();
		} else if (userInput === "d") {
			myField.moveDown();
		} else if (userInput === "u") {
			myField.moveUp();
		} else {
			console.log("Please enter a valid input (l,r,d,u)");
		}
	} while (isGameCurrent);
};

playGame();
