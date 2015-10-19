//A column needs to have 6 cells.
//if all 6 are full, it must tell you "no more!"
//else if !full...
//A column will only have one cellInPlay: the bottom-most cell.

Column = function() {
	this.canPlay = true;
	this.cells = [];
	//make the Columns out of cells.
};

Column.dropChip = function(){
	// **this is when the chip is dropped in the Board.turn....
};