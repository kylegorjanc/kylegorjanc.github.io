/*****************
*	My Little Pony™ and Connect4™ ©Hasbro, Inc.
*	Author: Kyle Gorjanc
*	Date: 10/15/2015
*****************/
$(function(){
console.log('C\'mon, everypony! Let\'s do some JavaScript!');
});

Player = function(name, chip){
	this.name = name;
	this.chip = chip;
};
var Player1 = new Player ('Player 1', 'pinkie');
var Player2 = new Player ('Player 2', 'rainbow');

Cell = function(){
	this.isPlayable = true;
	this.loc = undefined;
};
Column = function(){
	this.$id = $('.column').attr('id');
	this.select = function(){
		this.$name.click(function(){
			Board.columns[$id].push(new Cell(currentPlayer))
		})
	}
}

Board = function() {
	this.columns = [
	[],
	[],
	[],
	[],
	[],
	[],
	[]
	];
	this.columns[0] = 
	document.getElementByClassName.('column').forEach(function() {
		this.columns.push(new Column.$name);
		this.columns.value
		});
	}
};

newGame = function(){
	newBoard = new Board;
}

Chip = function(){
	player = Board.currentPlayer;
	value = value;

};




Game = function() {
	this.board = new Board;
	$('.column').click(function(){
	placeChip();
	});
	function getCurrentPlayer(){
		if (this.currentPlayer === undefined) {
			return Player1;
		} else if (this.currentPlayer === Player1) {
			return Player2;
		} else if (this.currentPlayer === Player2) {
			return Player1;
		}
	};
	this.currentPlayer = getCurrentPlayer();
};


var placeChip = function(){
(Game.columns[index]).push(new Chip);
};


