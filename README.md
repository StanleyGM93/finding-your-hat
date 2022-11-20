# Finding your hat

This is a terminal based game where the user is trying to navigate their way to their hat. In the beginning the user inputs how large they want the field to be in width and height. The field is then generated with holes in it that they must avoid. You win the game by reaching your hat without falling into any holes or going out of bounds.

## Set up

1. Clone a copy of this repository to your local machine
1. Ensure you have Node.js installed on your machine - `node -v`
1. Run `npm install` to install dependencies
1. Play the game

## Play the game

1. Run `node main.js`
1. Enter a width and height for the field as prompted
1. The field will be generated
1. Your objective is to find the hat - `^`
1. Avoid falling into the holes - `O`
1. The path you've taken is noted by the path character - `*`
1. To move enter `r`, `d`, `l`, `u`, which stand for right, down, left and up.
1. Ensure you don't fall out of bounds

## Purpose

The purpose of this game was to learn some basic skills in Node.js. This simple game was a way to practice building a project that uses the terminal and not a web browser.
