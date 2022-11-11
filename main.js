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
		// this.currentLocation =
		// 	this.field[this.verticalLocation][this.horizontalLocation];
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
	generateField(height, width) {
		const newField = [[]];
		for (let i = 0; i <= height; i++) {
			for (let j = 0; j <= width; j++) {
				newField[i][j].push(this.characterSelector());
			}
		}
		newField[0][0] = pathCharacter;
	}
	characterSelector() {
		let randomNumber = Math.random();
		if (randomNumber <= 0.2) {
			return hole;
		} else {
			return fieldCharacter;
		}
	}
}

const myField = new Field([
	["*", "░", "O"],
	["░", "O", "░"],
	["░", "^", "░"],
]);

const createGame = () => {
	let userHeightInput = prompt("Please enter a height for the field ");
	let userWidthInput = prompt("Please enter a width for the field ");
	const myField = new Field();
	myField.generateField(userHeightInput, userWidthInput);
	playGame(myField);
};

const playGame = (myField) => {
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

createGame();
