# chess-js
Chess Library that contains Chess Game Rules and Pieces Movement Validation in Javascript. Soon, GameAnalysis and BoardEditor classes will be added.

## Installation
```
git clone https://github.com/ThalisonAmaral2/chess-js.git
```

## How to use it?
Create a main.js and import the Game instance:
```js
const Game = require("./game/Game")
const game = new Game();
```

Now you have to the following Methods:

`game.displayBoard()`

```js
const Game = require("./game/Game")
const game = new Game();
game.displayBoard()
//If no position was loaded to the game, it will display a 8x8 empty chessboard.

// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 


```

## Loading Positions

```js
const Game = require("./game/Game");
const game = new Game();
game.initialPosition() // Loads the default initial position
game.displayBoard();

// R  N  B  K  Q  B  N  R 
// P  P  P  P  P  P  P  P 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// _  _  _  _  _  _  _  _ 
// p  p  p  p  p  p  p  p 
// r  n  b  k  q  b  n  r 

```

### Loading a custom position from a FEN

```js
const Game = require("./game/Game");
const game = new Game();
game.loadFen("rnbqk2r/pp2nppp/4p3/2ppP3/3P2Q1/P1P5/2P2PPP/R1B1KBNR b KQkq") // Loads the FEN into the game.
game.displayBoard();

// R  N  B  K  _  B  _  R 
// P  P  P  _  _  P  _  _ 
// _  _  _  _  _  P  _  P 
// _  Q  _  _  P  _  _  _ 
// _  _  _  P  p  p  _  _ 
// _  _  _  p  _  _  _  _ 
// p  p  p  n  _  _  p  p 
// r  _  _  k  q  b  n  r 

```



