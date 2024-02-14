const playerNumber = document.getElementsByClassName("playerNumber")[0];
const playerNames = document.getElementsByClassName("player-names")[0];
const generateBtn = document.getElementsByClassName("generateBtn")[0];

const selectOptionFunction = () => {
  playerNames.innerHTML = "";
  const playerNumberInt = parseInt(playerNumber.value);
  for (let i = 0; i < playerNumberInt; i++) {
    const playerInputPartDiv = `
    <div class="player">
    <h3>Player Name </h3>
    <input class="player-name">
    <br>
    <span>Player Value = </span>
    <select class="player-value" name="playerValue">
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>
    `;

    playerNames.innerHTML += playerInputPartDiv;
  }
};

const generateTeam = () => {
  const playerNames = document.querySelectorAll(".player-name");
  const playerValues = document.querySelectorAll(".player-value");
  let playersObject = [];
  const randomTeamSelector = Math.floor(Math.random()*2);
  console.log(randomTeamSelector);
  for (let i = 0; i < playerNames.length; i++) {
    const player = {
      name: playerNames[i].value,
      value: playerValues[i].value,
    };
    playersObject.push(player);
  }
};

playerNumber.addEventListener("change", selectOptionFunction);
generateBtn.addEventListener("click", generateTeam);
