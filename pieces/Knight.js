const Piece =  require('./Piece')
class Knight extends Piece {
    constructor(side){
        super();
        this.side = side;
        this.symbol = "N";
        this.name = "knight"
        this.offsets = [
                [-2,-1],[-2, 1],
            [-1,-2],        [-1, 2],
            [ 1,-2],        [ 1, 2],
                [ 2,-1],[ 2, 1],
        ]
    }
}

module.exports = Knight;