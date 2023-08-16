class Piece {
    constructor(){
        this.location;
    }
    squareToIndex(square){
        let col = (square[0].charCodeAt() - 104) *(-1) + 0; // + 0 prevents the result to be -0
        let row = square[1] - 1;

        return [row, col]
    }

    indexToCoordinate(index) {
        let rowIndex = parseInt(index[0]);
        let colIndex = parseInt(index[1]);
    
        let row = String.fromCharCode(104 - rowIndex);
        let col = String(colIndex + 1);
        return row + col;
    }
   
    updateLocation(square){
        this.location = square;
    }
}

module.exports = Piece;