const Piece =  require('./Piece')
class King extends Piece{
    constructor(side){
        super();
        this.side = side;
        this.symbol = "K";
        this.name = "king";
        this.offsets = [
            [-1,-1], [-1, 0], [-1, 1],
            [ 0,-1],          [ 0, 1],
            [ 1,-1], [ 1, 0], [ 1, 1],
        ]
    }

}

module.exports = King;