const playerNumber = document.getElementsByClassName("playerNumber")[0];
const playerNames = document.getElementsByClassName("player-names")[0];

const selectOptionFunction = () => {
  playerNames.innerHTML = "";
  const playerNumberInt = parseInt(playerNumber.value);
  for (let i = 0; i < playerNumberInt; i++) {
    const playerInputPartDiv = `
    <div class="player-name">
    <h3>Player Name </h3>
    <input>
    <br>
    <span>Player Value = </span>
    <select class="playerValue" name="playerValue">
      <option value="option1">5</option>
      <option value="option2">6</option>
      <option value="option3">7</option>
      <option value="option4">8</option>
      <option value="option5">9</option>
      <option value="option5">10</option>
    </select>
  </div>
    `;

    playerNames.innerHTML += playerInputPartDiv;
  }
};

// Button Click Event Listener

playerNumber.addEventListener("change", selectOptionFunction);
