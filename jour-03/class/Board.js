// Cette class représentera notre plateau
// de Tic Tac Toe et devrait avoir les attributs suivants :
// ● grid (un tableau 2D pour représenter le plateau de jeu)
// ● hasWinner (pour savoir si une victoire a été obtenue)

export default class Board {
  constructor() {
    this.initializeBoard();
  }

  // Méthode initialisant le plateau de jeu et attribue false à la propriété hasWinner.

  initializeBoard() {
    this.hasWinner = false;
    this.grid = [
      ["-", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ];
  }

 /* Méthode qui affiche le plateau de jeu dans la div avec l'id board. Pour
 chacune des lignes, créez une div avec la class “row”. */

  displayBoard() {
    const board = document.querySelector("#board");
    board.innerHTML = "";
    for (let i = 0; i < this.grid.length; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < this.grid[i].length; j++) {
        const cell = document.createElement("button");
        cell.classList.add("case");
        cell.id = `btn-${i}-${j}`;
        cell.innerHTML = this.grid[i][j];
        row.appendChild(cell);
      }
      board.appendChild(row);
    }
  }

  /* Méthode qui Permet de placer le symbole du joueur ('X' ou 'O') à
  l'emplacement spécifié. Si la case est déjà prise, elle retourne false, sinon elle
  place le mouvement et retourne true. */

  placeMove(row, col, symbol) {
    if (this.grid[row][col] === "-") {
      this.grid[row][col] = symbol;
      this.displayBoard();
    } else {
      return false;
    }
  }

  /* Méthode qui vérifie si l'une des combinaisons gagnantes est présente sur le
  plateau. Si oui, change la valeur de hasWinner et retourne true, sinon, retourne
  false. */

  checkVictory() {
    const winningCombination = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];
      if (
        this.grid[Math.floor(a / 3)][a % 3] !== "-" &&
        this.grid[Math.floor(a / 3)][a % 3] ===
          this.grid[Math.floor(b / 3)][b % 3] &&
        this.grid[Math.floor(a / 3)][a % 3] ===
          this.grid[Math.floor(c / 3)][c % 3]
      ) {
        this.hasWinner = true;
        return true;
      }
    }
    return false;
  }


  isFull() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === "-") {
          return false;
        }
      }
    }
    return true;
  }

  resetBoard() {
    this.initializeBoard();
  }

}




