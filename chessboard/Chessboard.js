const King = require("../pieces/King");
const Queen = require("../pieces/Queen");
const Bishop = require("../pieces/Bishop");
const Knight = require("../pieces/Knight");
const Rook = require("../pieces/Rook");
const Pawn = require("../pieces/Pawn");

class Chessboard {
    constructor() {
        this.turn = "white";
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
    displayBoard(){
        let board = this.getBoard();
        for (let row = 0; row < 8; row++) {
            let rowString = '';
            for (let col = 0; col < 8; col++) {
                if(board[row][col] != ''){
                    rowString += " "+board[row][col]+" ";
                }else{
                    rowString += " _ ";
                }
            }
            console.log(rowString)
        }
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
    loadFen(fen) {
        this.clear();
        if (fen != null) {
            let formatedFen = this.formatFen(fen);
            let fenParts = formatedFen.split('/');

            let turn = this.checkTurn(fen);
            this.changeTurn(turn);


            fenParts.forEach((fenRow, rowIdx) => {
                let colIdx = 0;
                fenRow.split('').forEach((char) => {
                    if (/\d/.test(char)) {
                        colIdx += parseInt(char, 10);
                    } else {
                        const piece = this.createPiece(char);
                        if (piece) {
                            const square = String.fromCharCode('a'.charCodeAt(0) + colIdx) + (8 - rowIdx);
                            this.placePiece(piece, square);
                        }
                        colIdx++;
                    }
                });
            });
            return;
        }
        return "Please enter a FEN";
    }
    createPiece(fenChar){
        switch (fenChar) {
            case 'K':
                return new King("white");
            case 'Q':
                return new Queen("white");
            case 'R':
                return new Rook("white");
            case 'B':
                return new Bishop("white");
            case 'N': 
                return new Knight("white");
            case 'P':
                return new Pawn("white");

            case 'k':
                return new King("black");
            case 'q':
                return new Queen("black");
            case 'r':
                return new Rook("black");
            case 'b':
                return new Bishop("black");
            case 'n': 
                return new Knight("black");
            case 'p':
                return new Pawn("black");
            default:
                return null;
        }
    }
    formatFen(fen) {
        let index = 0;
        for (const char of fen) {
            if(char == " "){
                return fen.slice(0, index)
            }
            index++;
        }
    }
    checkTurn(fen){
        let index = 0;
        for (const char of fen) {
            if(char == " "){
                return fen.slice(index+1, index+2)
            }
            index++;
        }
    }
    changeTurn(turn){
        if(turn[0] == 'b'){
            this.turn = "black";
        }else{
            this.turn = "white";
        }
    }
    clear(){
        this.board = this.createBoard();
    }
}



module.exports = Chessboard;