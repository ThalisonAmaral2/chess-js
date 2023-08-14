class Chessboard {
    constructor() {
        this.board = this.createBoard();
    }

    createBoard() {
        let chessboard = [];
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                //base-8
                let index = String(row) + String(col);
                let square = this.indexToCoordinate(index);
                chessboard.push({square: square, index: index, piece: null})
            }
        }
        return chessboard;
    }
    indexToCoordinate(index) {
        let rowIndex = parseInt(index[0]);
        let colIndex = parseInt(index[1]);
    
        let row = String.fromCharCode(104 - rowIndex);
        let col = String(colIndex + 1);
        return row + col;
    }
    getSquare(square) {
        return this.board.find(squareObj => {
            return squareObj.square == square;
        })
    }
    getPiece(square){
        return this.getSquare(square).piece;
    }
    placePiece(piece, square) {
        this.getSquare(square).piece = piece;
        this.getPiece(square).updateLocation(square);
    }
    removePiece(square) {
        this.getSquare(square).piece = null;
    }
    getBoard(){
        const chessboard = [];
        for (let row = 0; row < 8; row++) {
            const rowArr = [];
            for (let col = 0; col < 8; col++) {
                let index = String(col) + String(row);  //base-8
                let square = this.indexToCoordinate(index);
                let foundPiece = this.getPiece(square);

                if(foundPiece != null){
                    if(foundPiece.side == "black"){
                        rowArr.push(foundPiece.symbol.toLowerCase());
                    }else{
                        rowArr.push(foundPiece.symbol);
                    }
                }else{
                    rowArr.push('');
                }
            }
            chessboard.push(rowArr);
        }
        return chessboard;
    }
    getFen() {
        let board = this.getBoard()
        let fen = '';
        for (let row = 7; row >= 0; row--) {
            let emptyCount = 0;
            for (let col = 7; col >= 0; col--) {
                const piece = board[row][col];
                if (piece === '') {
                    emptyCount++;
                } else {
                    if (emptyCount > 0) {
                        fen += emptyCount;
                        emptyCount = 0;
                    }
                    fen += piece;
                }
            }
            if (emptyCount > 0) {
                fen += emptyCount;
            }
            if (row != 0) {
                fen += '/';
            }
        }
    
        return fen;
    }
    setPosition(fen){
    }
}



module.exports = Chessboard;