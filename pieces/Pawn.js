const Piece =  require('./Piece')
class Pawn extends Piece{
    constructor(side){
        super();
        this.side = side;
        this.name = "pawn";
        this.symbol = "P";
        this.offsets;
    }

    getMoves(){
        if(this.side == "white"){
            if(this.location[1] == 2){
                return [[-1, 0],[-2, 0]]
            }else{
                return [[-1, 0]]
            }
        }else{
            if(this.location[1] == 7){
                return [[1, 0],[2, 0]]
            }else{
                return [[1, 0]]
            }
        }
    }
}

module.exports = Pawn;