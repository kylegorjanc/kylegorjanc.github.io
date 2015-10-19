/*****************
*	My Little Pony™ and Connect4™ ©Hasbro, Inc.
*	Author: Kyle Gorjanc
*	Date: 10/15/2015
*****************/
$(function(){
console.log('Lock \'n load, everypony!');
//at the start, there is a start screen that covers the game board. 
//This screen will have "1 player start" and "2 player start" buttons.
//We'll call this Screen 1.
// **********************
var startScreen = function() {
	var $overlay = $('<div>')
	$overlay.addClass('overlay').attr('id', 'start');
	var $onePbutton = $('<button>');
	$onePbutton.addClass('button').attr('id', 'onePB').html('1 PLAYER')
	var $twoPbutton = $('<button>');
	$twoPbutton.addClass('button').attr('id', 'twoPB').html('2 PLAYER')
	$overlay.prepend($onePbutton);
	$overlay.prepend($twoPbutton);
	$('.container').prepend($overlay);
	// $onePbutton.click(function(){
	// 	$('#start').remove();
	// 	player1Choose();
	// 	computerChoose();
	// });
	$twoPbutton.click(function(){
		$('#start').remove();
		// player1Choose();
		// player2Choose();
	});
};
startScreen();

// var ponies = [
// 'FlutterShy',
// 'Pinkie Pie',
// 'Rainbow Dash', 
// 'Twilight Sparkle'
// ]

// var player1Choose = function(){
// 	var $overlay = $('<div>')
// 	$overlay.addClass('overlay').attr('id', 'oneP');
// 	$('.container').prepend($overlay);
// 	 var ponyList = $('<ul>').attr('id', 'ponyList');
// 	 	ponies.forEach(function(value){
// 	 		var li = $('<li>');
// 	 		li.text(value);
// 	 		ponyList.append(li);
// 	 	});
// 	 $('#oneP').append(ponyList);


// 	var $fs = $('<img id = "fs" src ="images/fs_big.png">');
// 		$fs.click(function(){
// 			alert("You chose FlutterShy!");
// 			Player1.name = 'FlutterShy';
// 			Player1.chip = 'images/flutterchip.png';
// 		});
// 	var $pp = $('<img id = "pp" src = "images/pp_big.png">');
// 		$pp.click(function(){
// 			alert("You chose Pinkie Pie!");
// 		});
// 	var $rd = $('<img id = "rd" src = "images/rd_big.png">');
// 		$rd.click(function(){
// 			alert("You chose Rainbow Dash!");
// 			Player1.name = 'Rainbow Dash';
// 			Player1.chip = 'images/rainbowchip.png';
// 		});
// 	var $ts = $('<img id = "ts" src = "images/ts_big.png">');
// 		$ts.click(function(){
// 			alert("You chose Twilight Sparkle!");
// 			Player1.name = 'Twilight Sparkle';
// 			Player1.chip = 'images/twilightchip.png';
// 		});
// 	$('#oneP').append($fs, $pp, $rd, $ts);
// 	$('#oneP').html('<ul><li>FlutterShy</li><li>Pinkie Pie</li><li>Rainbow Dash</li><li></ul>')
// };


// *******

// To play the game you need two players, a game board, and some chips. Let's make those.
//if 1 player mode, Player 2 === computer.
// Player = function(name, chip, getPony){
// 	this.name = name;
// 	this.chip = "";
// };
Player = function(name, chip, num) {
	this.name = name;
	this.chip = chip;
	this.num = num;
};

Player1 = new Player('Pinkie Pie', 'images/pinkiechip.png', 1);
Player2 = new Player('Rainbow Dash', 'images/rainbowchip.png', 2);
currentPlayer = Player1;
// {
// 	this.name = 'Pinkie Pie',
// 	this.chipImg = '../images/pinkiechip.png'
	
// };

// Player2 = function(name, chip) {
// 	return{
// 	name: 'Rainbow Dash',
// 	chip: ''
// 	chipImg: '../images/rainbowchip.png'
// 	};
// };
/*******************LOAD GAME************/
Game();


});

Cell = function(value) {
	this.value = 0;
	this.canPlay = function() {
		if (this.value === 0) {
			return true;
		} else {
			return false;
		}
	};
};

Column = function(cells, makeRows) {
	this.cells = [];
	this.makeRows = function() {
		for (var i = 0; i < 6; i++){
			(this.cells).push(new Cell());
			this.cells[i].id = i.toString();
			this.cells[i].className = "jCell";
			// console.log(this.cells);			
		}
	};
	this.makeRows();
};

//make the Columns out of cells.


Board = function(columns) {
	this.columns = [];
	this.currentPlayer = Player1;
};
Board.prototype.dropChip = function() {
		$('.column').each(function(){
		  	$(this).click(function(){
		  		var $last = $(this).children().last();
		  		// if ($last.children().length > 0)
				$last.append('<img id = ' + currentPlayer + ' src = '+ currentPlayer.chip + '>');
				console.log($last);

				// var x = $last.index;
				// console.log(x);
				// var y = $(this).index;
				// console.log(y);
				// newGame.columns[x][y].value = currentPlayer.num;
				// console.log('click-ed.');
				// console.log(currentPlayer.chip);
				if (currentPlayer === Player1) {
					currentPlayer = Player2;
				} else if (currentPlayer === Player2) {
					currentPlayer = Player1;
				}
				// console.log(currentPlayer);	
				event.stopPropagation();	
			})
			// console.log($(this));
		});
// 		var col = document.getElementsbyClassName('column');
// 		col.addEventListener('click', function(){
// 			var cellImg = document.col.getElementsbyTagName('img'); 
// 			cellImg.src = currentPlayer.chip;
// 			console.log('I am clicked.')
// 		});
};

Board.prototype.makeBoard = function(){
	for (var i=0; i < 7; i++) {
		this.columns.push(new Column());
		iString = i.toString();
		this.columns[i].id = iString;
		this.columns[i].className = "jColumn";
		// var $colDiv = $('div');
		// $colDiv.addClass('column').attr('id', iString);
		
	}			
};

Board.prototype.checkWinner = function() {
	console.log('I need to finish this.')
}

Game = function(){
	this.newGame = new Board();
	this.newGame.makeBoard();
	this.newGame.dropChip();
	var gameArray = $.makeArray(this.newGame);
	$.map(gameArray, this.newGame.checkWinner);
};



// Board.prototype.getMode = function(){

// };


// Board.prototype.getWinner = function(){
    
// };

/* Okay.  The game itself is a function of the board and a player's chips. */
// Game = function(board, chips) {
// 	this.board = Board;
// 	this.chips = Board.currentPlayer.chips

// }







//at the start, there is a start screen that covers the game board. 
//This screen will have "1 player start" and "2 player start" buttons.
//We'll call this Screen 1.
/***********************
var startScreen = function() {
	var $overlay = $('<div>').overlay.attr('id', 'start');
	var $onePlayerButton = $('<button>').button.attr('id', 'onePlayerButton');
	var $twoPlayerButton = $('<button>').button.attr('id', 'twoPlayerButton');
	$image
	$overlay.append($onePlayerButton);
	$overlay.append($twoPlayerButton);
	$('.board').prepend($overlay);
};
/***********************/
// Screen 2  //player1Choose
/***********************
var player1Choose = function() {
	var $overlay = $('<div>').overlay.attr('id', 'start');
	var $onePlayerButton = $('<button>').button.attr('id', 'onePlayerButton');
	var $twoPlayerButton = $('<button>').button.attr('id', 'twoPlayerButton');
	$image
	$overlay.append($onePlayerButton);
	$overlay.append($twoPlayerButton);
	$('.board').prepend($overlay);
};
/***********************/
	//Player 1 chooses a pony.
	//getPony = function() {
		// all four ponies are shown. 
		// Player 1 clicks a pony
		// that pony becomes assigned to the 'pony' attribute of Player 1. 
// Screen Player2Choose - only shown if 2 player selected. Else, computer will randomly pick a pony.
	//Player 2 chooses a pony.
	// three ponies are shown: all ponies less the player 1 pony.
	// Player 2 clicks a pony and that becomes assigned to the 'pony' attribute of Player 2.
// Screen 4 - game play.
// Screen 5 WinnerScreen- announce the winner, ask 'do you want to play again?'
//			If yes - back to screen 2.  Else, load the MLP homepage.
