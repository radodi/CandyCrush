var gameboard = [['R','G','G','B'], 
				 ['B','O','G','G'], 
				 ['P','O','B','P'], 
				 ['Y','B','Y','O']],
cell = [0, 1],
direction = 'D';
var xLen = gameboard[0].length;
var yLen = gameboard.length;
// checkDirection - Checks for a valid move direction
function checkDirection () {
	switch(direction){
		case 'L':
			if (cell[0]>0) {
				return true;
			}
			break;
		case 'R':
			if (cell[1] < gameboard[cell[0]].length) {
				return true;
			}
			break;
		case 'U':
			if (cell[1]>0) {
				return true;
			}
			break;
		case 'D':
			if (cell[0] < gameboard.length-1) {
				return true;
			}
			break;
	}
}
//doMove() - Changes the positions (values) of two elements in the specified direction
// and set new cell value
function doMove(){
	var temp;
	console.log(cell);
	console.log('--------------');
	console.log(gameboard);
	switch(direction){
		case 'L':
			temp = gameboard[cell[0]][(cell[1]-1)];
			gameboard[cell[0]][(cell[1]-1)] = gameboard[cell[0]][cell[1]];
			gameboard[cell[0]][cell[1]] = temp;
			cell = [cell[0], (cell[1]-1)];
			break;
		case 'R':
			temp = gameboard[cell[0]][(cell[1]+1)];
			gameboard[cell[0]][(cell[1]+1)] = gameboard[cell[0]][cell[1]];
			gameboard[cell[0]][cell[1]] = temp;
			cell = [cell[0], (cell[1]+1)];
			break;
		case 'U':
			temp = gameboard[(cell[0]-1)][cell[1]];
			gameboard[(cell[0]-1)][cell[1]] = gameboard[cell[0]][cell[1]];
			gameboard[cell[0]][cell[1]] = temp;
			cell = [(cell[0]-1), cell[1]];
			break;
		case 'D':
			temp = gameboard[(cell[0]+1)][cell[1]];
			gameboard[(cell[0]+1)][cell[1]] = gameboard[cell[0]][cell[1]];
			gameboard[cell[0]][cell[1]] = temp;
			cell = [(cell[0]+1), cell[1]];
			break;
	}
	console.log('- - - - - - - - - - - - - -');
	console.log(cell);
	console.log('--------------');
	console.log(gameboard);
}
function candyCrush(gameboard, cell, direction) {
	if (checkDirection()) {
		doMove();
	}
}
candyCrush(gameboard, cell, direction);