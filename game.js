var gameboard = [["R","G","G","B"], 
				 ["G","O","G","G"], 
				 ["P","G","B","P"], 
				 ["Y","B","Y","O"]],
cell = [1, 0],
newCell,
direction = 'R';
var xLen = gameboard[0].length;
var yLen = gameboard.length;
// checkDirection - Checks for a valid move direction
function checkDirection () {
	switch(direction){
		case 'L':
			if (cell[1]>0) {
				newCell=[cell[0],(cell[1]-1)];
				return true;
			}
			break;
		case 'R':
			if (cell[1] < gameboard[cell[0]].length) {
				newCell=[cell[0],(cell[1]+1)];
				return true;
			}
			break;
		case 'U':
			if (cell[0]>0) {
				newCell=[(cell[0]-1),cell[1]];
				return true;
			}
			break;
		case 'D':
			if (cell[0] < gameboard.length-1) {
				newCell=[(cell[0]+1),cell[1]];
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
			break;
		case 'R':
			temp = gameboard[cell[0]][(cell[1]+1)];
			gameboard[cell[0]][(cell[1]+1)] = gameboard[cell[0]][cell[1]];
			gameboard[cell[0]][cell[1]] = temp;
			break;
		case 'U':
			temp = gameboard[(cell[0]-1)][cell[1]];
			gameboard[(cell[0]-1)][cell[1]] = gameboard[cell[0]][cell[1]];
			gameboard[cell[0]][cell[1]] = temp;
			break;
		case 'D':
			temp = gameboard[(cell[0]+1)][cell[1]];
			gameboard[(cell[0]+1)][cell[1]] = gameboard[cell[0]][cell[1]];
			gameboard[cell[0]][cell[1]] = temp;
			break;
	}
	console.log('--------------');
	console.log(gameboard);
	return gameboard ;
}
// checkUp - Checks for matching up until reach a different value
// and returns a number of matches
function checkUp(arg){
	if (arg[0] < 1) {
		return 0;
	} else {
		var num = 0, n=1;
		for (var i = arg[0]; i > 0; i--) {
			if (gameboard[arg[0]][arg[1]] === gameboard[(arg[0]-n)][arg[1]]) {
				num++;
				n++;
			} else {
				return num;
			}
		}
		return num;
	}
}
// checkDown - Checks for matching down until reach a different value
// and returns a number of matches
function checkDown(arg){
	if (arg[0] === yLen-1) {
		return 0;
	} else {
		var num = 0, n=1;
		for (var i = arg[0]; i < yLen-1; i++) {
			if (gameboard[arg[0]][arg[1]] === gameboard[(arg[0]+n)][arg[1]]) {
				num++;
				n++;
			} else {
				return num;
			}
		}
		return num;
	}
}
// checkLeft - Checks for matching left until reach a different value
// and returns a number of matches
function checkLeft(arg){
	if (arg[1] < 1) {
		return 0;
	} else {
		var num = 0, n=1;
		for (var i = arg[1]; i > 0; i--) {
			if (gameboard[arg[0]][arg[1]] === gameboard[arg[0]][(arg[1]-n)]) {
				num++;
				n++;
			} else {
				return num;
			}
		}
		return num;
	}
}
// checkRight - Checks for matching right until reach a different value
// and returns a number of matches
function checkRight(arg){
	if (arg[1] === xLen-1) {
		return 0;
	} else {
		var num = 0, n=1;
		for (var i = arg[1]; i < xLen; i++) {
			if (gameboard[arg[0]][arg[1]] === gameboard[arg[0]][(arg[1]+n)]) {
				num++;
				n++;
			} else {
				return num;
			}
		}
		return num;
	}
}
// matches - The function checks for more than 2 horizontal and vertical matching values
// and puts the coordinates of the values in a new array.
function matches(gameboard, startCell, valuesArr){
	console.log(valuesArr);
	var matchesArr=[startCell];
	if (valuesArr[0]+valuesArr[1] > 1) {
		for (var i = valuesArr[0]; i > 0; i--) {
			matchesArr.push([startCell[0],(startCell[1]-i)]);
		}
		for (var j = valuesArr[0]; j > 0; j--) {
			matchesArr.push([startCell[0],(startCell[1]+j)]);
		}
	}
	if (valuesArr[2]+valuesArr[3] > 1) {
		for (var k = valuesArr[2]; k > 0; k--) {
			matchesArr.push([(startCell[0]-k), startCell[1]]);
		}
		for (var l = valuesArr[3]; l > 0; l--) {
			matchesArr.push([(startCell[0]+l), startCell[1]]);
		}
	}
	console.log(matchesArr);
}

function candyCrush(gameboard, cell, direction) {
	if (checkDirection()) {
		doMove();
		matches(gameboard, newCell,[checkUp(newCell),checkDown(newCell), checkLeft(newCell), checkRight(newCell)]);

	}
}
candyCrush(gameboard, cell, direction);