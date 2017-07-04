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
// checkUp - Checks for matching up until reach a different value
// and returns a number of matches
function checkUp(){
	if (cell[0] < 1) {
		return 0;
	} else {
		var num = 0;
		for (var i = cell[0]; i > 0; i--) {
			if (gameboard[cell[0]][cell[1]] === gameboard[(cell[0]-i)][cell[1]]) {
				num++;
			} else {
				return num;
			}
		}
	}
}
// checkDown - Checks for matching down until reach a different value
// and returns a number of matches
function checkDown(){
	if (cell[0] === yLen-1) {
		return 0;
	} else {
		var num = 0;
		for (var i = cell[0]; i < yLen; i++) {
			if (gameboard[cell[0]][cell[1]] === gameboard[(cell[0]+i)][cell[1]]) {
				num++;
			} else {
				return num;
			}
		}
	}
}
// checkLeft - Checks for matching left until reach a different value
// and returns a number of matches
function checkLeft(){
	if (cell[1] < 1) {
		return 0;
	} else {
		var num = 0;
		for (var i = cell[1]; i > 0; i--) {
			if (gameboard[cell[0]][cell[1]] === gameboard[cell[0]][(cell[1]-i)]) {
				num++;
			} else {
				return num;
			}
		}
	}
}
// checkRight - Checks for matching right until reach a different value
// and returns a number of matches
function checkRight(){
	if (cell[1] === xLen-1) {
		return 0;
	} else {
		var num = 0;
		for (var i = cell[1]; i < xLen; i++) {
			if (gameboard[cell[0]][cell[1]] === gameboard[cell[0]][(cell[1]+i)]) {
				num++;
			} else {
				return num;
			}
		}
	}
}
function candyCrush(gameboard, cell, direction) {
	if (checkDirection()) {
		doMove();
		console.log('***');
		console.log('Up: '+checkUp());
		console.log('***');
		console.log('Down: '+checkDown());
		console.log('***');
		console.log('Left: '+checkLeft());
		console.log('***');
		console.log('Right: '+checkRight());
	}
}
candyCrush(gameboard, cell, direction);