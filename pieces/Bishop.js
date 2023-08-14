class Bishop {
    constructor(side){
        this.side = side;
        this.symbol = "B";
        this.name = "bishop";
        this.location;
        this.offsets = [
            [-1,-1],     [-1, 1],

            [ 1,-1],     [ 1, 1],
        ]
    }

    getMoves(){
        let bishop = new Bishop();
        for (let i = 0; i < bishop.offsets.length; i++) {
            let [dx, dy] = bishop.offsets[i];
            // let [newRow, newCol] = [row]
        }
        return this.location;
    }
    updateLocation(square){
        this.location = square;
    }

}

module.exports = Bishop;