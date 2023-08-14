const Chessboard = require("../chessboard/Chessboard");
const FenNavigation = require("./fenNavigation");
const King = require("../pieces/King");
const Queen = require("../pieces/Queen");
const Bishop = require("../pieces/Bishop");
const Knight = require("../pieces/Knight");
const Rook = require("../pieces/Rook");
const Pawn = require("../pieces/Pawn");

class Game extends Chessboard {
    constructor(){
        super();
        this.turn = "white";
        this.whiteCastling = "KQ";
        this.blackCastling = "kq";
        this.pgn = '';
        this.fenStack = new FenNavigation();
        this.moveCounter = 0;
    }
    // Game Session Methods
    swapTurn() {
        this.turn = (this.turn === "white") ? "black" : "white";
    }
    initialPosition() {
        this.placePiece(new Rook("white"),"h1");
        this.placePiece(new Knight("white"),"g1");
        this.placePiece(new Bishop("white"),"f1");
        this.placePiece(new King("white"),"e1");
        this.placePiece(new Queen("white"),"d1");
        this.placePiece(new Bishop("white"),"c1");
        this.placePiece(new Knight("white"),"b1");
        this.placePiece(new Rook("white"),"a1");
        this.placePiece(new Pawn("white"),"h2");
        this.placePiece(new Pawn("white"),"g2");
        this.placePiece(new Pawn("white"),"f2");
        this.placePiece(new Pawn("white"),"e2");
        this.placePiece(new Pawn("white"),"d2");
        this.placePiece(new Pawn("white"),"c2");
        this.placePiece(new Pawn("white"),"b2");
        this.placePiece(new Pawn("white"),"a2");

        this.placePiece(new Rook("black"),"h8");
        this.placePiece(new Knight("black"),"g8");
        this.placePiece(new Bishop("black"),"f8");
        this.placePiece(new King("black"),"e8");
        this.placePiece(new Queen("black"),"d8");
        this.placePiece(new Bishop("black"),"c8");
        this.placePiece(new Knight("black"),"b8");
        this.placePiece(new Rook("black"),"a8");
        this.placePiece(new Pawn("black"),"h7");
        this.placePiece(new Pawn("black"),"g7");
        this.placePiece(new Pawn("black"),"f7");
        this.placePiece(new Pawn("black"),"e7");
        this.placePiece(new Pawn("black"),"d7");
        this.placePiece(new Pawn("black"),"c7");
        this.placePiece(new Pawn("black"),"b7");
        this.placePiece(new Pawn("black"),"a7");

        this.updateHistory();
    }
    getGameFen() {
        const fen = this.getFen();
        const gameFen = `${fen} ${this.turn[0]} ${this.whiteCastling}${this.blackCastling}`;
        return gameFen;
    }
    updateHistory(){
        // this.fenHistory.push(this.getGameFen());
        this.fenStack.push(this.getGameFen());
    }
    getHistory(){
        return this.fenHistory;
    }
    movePiece(originSquare, targetSquare){
        let piece = this.getPiece(originSquare);

        if(!piece){
            throw new Error("No piece was found.");
        }
        if (piece.side !== this.turn) {
            throw  new Error(`You can't move the ${piece.side} ${piece.name}, it's not your turn.`);
        }

        if (this.isMoveLegal(piece, targetSquare)) {
            this.removePiece(originSquare);
            this.placePiece(piece, targetSquare);
            this.swapTurn();
            this.updateHistory();
            this.updateMoveCounter();
        }
    }
    selectPiece(originSquare){
        
    }
    isMoveLegal(piece, targetSquare){
        return true;
    }
    // Moves Navigation
    nextMove(){
        let next = this.fenStack.next();
        if(next != null){
            return next;
        }
        return "There is no next move";
    }
    previousMove(){
        let previous = this.fenStack.previous();
        if(previous != null){
            return previous;
        }
        return "There is no previous move";
    }
    updateMoveCounter(){
        this.moveCounter++;
    }
    getMoveNumber(){
        return String(Math.ceil(this.moveCounter / 2));
    }
    setPGN() {
        let moveNumber = this.getMoveNumber();
    }
    
}


const game = new Game();
game.initialPosition();
game.movePiece("e2", "e4");
game.movePiece("e7", "e5");
game.movePiece("f1", "b5");
console.log(game.getPiece("g1"));

