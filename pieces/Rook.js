class Rook {
    constructor(side){
        this.side = side;
        this.symbol = "R";
        this.name = "rook";
        this.offsets = [
                    [-1, 0],
            [ 0,-1],        [ 0, 1],
                    [ 1, 0],
        ]
    }

    updateLocation(square){
        this.location = square;
    }
}

module.exports = Rook;