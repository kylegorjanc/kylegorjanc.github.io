/*****************
*	My Little Pony™ and Connect4™ ©Hasbro, Inc.
*	Author: Kyle Gorjanc
*	Date: 10/15/2015
*****************/
$(function(){
console.log('Lock \'n load, everypony!');


// To play the game you need two players, a game board, and some chips. Let's make those.
//if 1 player mode, Player 2 === computer.
// Player = function(name, chip, getPony){
// 	this.name = name;
// 	this.chip = "";
// };

var Player1 = function(name, chip){
	return{
	name: 'Pinkie Pie',
	chip: '../images/pinkiechip.png'
	};
};

var Player2 = function(name, chip) {
	return{
	name: 'Rainbow Dash',
	chip: '../images/rainbowchip.png'
	};
};
/*******************LOAD GAME************/
Game();


});

//A board must have 7 Columns.
//must determine if 1 player mode or 2 player mode
//must start with Player 1 as the current player.
//must place a click event on a Column.
//The click will put the current player's chip on that Column's cell in play.
//The click will remove the cell in Play from the Column.cells array.
//The board will check for a Winner
	//if winner is found, show the Winner Board
//The current player will switch to the other player.

Board = function() {
	Column.makeColumns();
	this.columns = [];
	// this.playerMode = playerMode;
	this.currentPlayer = Player1;
	this.winner = '';
	this.selectedColumn = null;
};
Board.makeColumns = function() {
	if (Column.cells === []);
	for (var i = 0; i < 6; i++){
		(Column.cells).push(new Cell());
	} 
};
Board.makeBoard = function(){
	var $columnDivs = $('.column');
	if (this.columns === []) {
		for (var i = 0; i < 7; i++) {
			this.makeColumns();
			this.columns.push(new Column());
		}
	}
};

// Board.takeTurn = function(index){ 
// 	var selectedColumn = this.columns[index];
// 	Column.dropChip(this.columns[index]);
// 	if (selectedColumn === Column.canPlay) {
// 		playerSwitch = function(){
// 			switch(this.currentPlayer){
// 				case Player1:
// 				this.currentPlayer = Player2;
// 				break;
// 				case Player2:
// 				this.currentPlayer = Player1;
// 				break;
// 				default:
// 				this.currentPlayer = Player1;
// 			}
// 		};
// 	}
// };

//add click event to columns.
// Board.select
// $columnDivs.click(function(){
// 	Board(Board.currentPlayer.chip);
// 	Board.getCurrentPlayer();
// });

Board.render = function() {
	return this.columns[value].map(function(cell){
		var $colDiv = $(this.columns[value]);
		var img = (($(cell.value).toString()) +' > img');
		// if (cell.value === Player1){
		// }
	});
};

Game = function(){
	board = '';
	Board.makeBoard();
	// Board.takeTurn();
	// checkForWin();
};

// checkForWin = function(){
// 	if (currentPlayer.wins === false) {
// 		changePlayer();
// 		takeTurn();
// 		checkForWin();
// 	} else {
// 		alert(currentPlayer + ' ' + 'wins!');
// 	}
// }

//SOME HOLDOVERS FROM THE OLD STUFF:
// Board.prototype.getCurrentPlayer = function(){
// 	if (this.currentPlayer === "") {
// 		this.currentPlayer = Player1;
// 	} else if (this.currentPlayer === Player1) {
// 		this.currentPlayer = Player2;
// 	} else if (this.currentPlayer === Player2) {
// 		this.currentPlayer = Player1;
// 	}
// };

// Board.prototype.play = function(selection){
// 	var chipPlace = this.columns[selection];
// };

