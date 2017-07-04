var gameboard = [['R','G','G','B'], 
				 ['B','O','G','G'], 
				 ['P','O','B','P'], 
				 ['Y','B','Y','O']],
cell = [0, 1],
direction = 'D';
var xLen = gameboard[0].length;
var yLen = gameboard.length;
// checkDirection - Checks for a valid move direction
function checkDirection (gameboard, cell, direction) {
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
function candyCrush(gameboard, cell, direction) {
	if (checkDirection(gameboard, cell, direction)) {
		
	}
}
candyCrush(gameboard, cell, direction);