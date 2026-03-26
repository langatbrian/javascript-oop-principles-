import { checkWinner } from "./logic.js";
import { showWinner } from "./ui.js";

let score = 0;

export function playGame() {
  score++;

  if (checkWinner(score)) {
    showWinner();
  }
}
