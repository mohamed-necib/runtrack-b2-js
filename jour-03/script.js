import Player from "./class/Player.js";
import Board from "./class/Board.js";
import Game from "./class/Game.js";

// Display board
const board = new Board();
board.displayBoard();

// Create players
const player1 = new Player("X", true);
const player2 = new Player("O", false);

// Place Move
board.placeMove(0, 0, player1.symbol);
board.placeMove(0, 1, player2.symbol);
board.placeMove(0, 2, player1.symbol);










