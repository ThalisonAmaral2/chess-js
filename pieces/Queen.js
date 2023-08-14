class Queen {
    constructor(side){
        this.side = side;
        this.symbol = "Q";
        this.name = "queen";
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

module.exports = Queen;