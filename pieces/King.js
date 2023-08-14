class King {
    constructor(side){
        this.side = side;
        this.symbol = "K";
        this.name = "king";
        this.offsets = [
            [-1,-1], [-1, 0], [-1, 1],
            [ 0,-1],          [ 0, 1],
            [ 1,-1], [ 1, 0], [ 1, 1],
        ]
    }

    updateLocation(square){
        this.location = square;
    }

}

module.exports = King;