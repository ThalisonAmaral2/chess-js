const Piece =  require('./Piece')
class Queen extends Piece{
    constructor(side){
        super();
        this.side = side;
        this.symbol = "Q";
        this.name = "queen";
        this.offsets = [
            [-1,-1], [-1, 0], [-1, 1],
            [ 0,-1],          [ 0, 1],
            [ 1,-1], [ 1, 0], [ 1, 1],
        ]
    }
    getMoves(board){
        let [row, col] = this.squareToIndex(this.location);
        for (let i = 0; i < this.offsets.length; i++) {
            let [dx, dy] = this.offsets[i];
            let [newRow, newCol] = [row + dx, col + dy];
        
            while(newRow >=0 && newRow < 8 && newCol >= 0 && newCol < 8){
                let index = String(newCol) + String(newRow);
                let currentSquare = this.indexToCoordinate(index);
                let piece = board.getPiece(currentSquare);

                if(piece == null){
                    moves.push(currentSquare);
                }else if(piece.side != this.side){
                    moves.push(currentSquare);
                    break;
                }else{
                    break;
                }
                newRow+= dx;
                newCol+= dy;
            }
        }
        return moves;
    }
}

module.exports = Queen;