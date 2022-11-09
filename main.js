const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
	constructor(field) {
		this.field = field;
		this.horizontalLocation = 0;
		this.verticalLocation = 0;
		this.outerBoundVertical = this.field.length;
		this.outerBoundHorizontal = this.field[0].length;
		this.currentLocation =
			this.field[this.verticalLocation][this.horizontalLocation];
		this.isGameCurrent = true;
	}

	print() {
		console.log(this.field.join("\n"));
	}
	printCharacter() {
		return this.field[this.verticalLocation][this.horizontalLocation];
	}
	moveResult(character) {
		console.log("character = " + character);
		if (character === hat) {
			console.log("You have won the game");
			return (this.isGameCurrent = false);
		} else if (character === hole) {
			console.log("Oh no! You've fallen into a hole");
			return (this.isGameCurrent = false);
		} else if (character === fieldCharacter) {
			console.log("You've made it to the path character");
			this.field[this.verticalLocation][this.horizontalLocation] =
				pathCharacter;
			return (this.isGameCurrent = true);
		} else {
			console.log("How did we end up here???");
		}
	}
	moveRight() {
		if (this.horizontalLocation <= this.outerBoundHorizontal) {
			this.horizontalLocation++;

			this.moveResult(this.printCharacter());
		} else {
			console.log("You've fallen out of bounds");
			return this.isGameCurrent === false;
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
			myField.moveRight();
		} else {
			console.log("This isn`t working :(");
		}
		console.log(`this.isGameCurrent = ${this.isGameCurrent}`);
	} while (this.isGameCurrent);
};

playGame();
