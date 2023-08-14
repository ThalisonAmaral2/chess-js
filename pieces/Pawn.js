class Pawn {
    constructor(side){
        this.side = side;
        this.name = "pawn";
        this.symbol = "P";
        this.offsets = [];
    }

    updateLocation(square){
        this.location = square;
    }
}

module.exports = Pawn;