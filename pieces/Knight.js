class Knight {
    constructor(side){
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
    updateLocation(square){
        this.location = square;
    }
}

module.exports = Knight;