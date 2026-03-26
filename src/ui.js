export function showWinner() {
  const message = document.createElement("h1");
  message.textContent = "Game Over! You Win!";
  document.body.appendChild(message);
}
