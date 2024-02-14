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

const generateTeam = () => {
  const playerName = document.querySelectorAll(".player-name");
  const playerNamesList = [];
  for (let i = 0; i < playerName.length; i++) {
    playerNamesList.push(playerName[i].value);
  }

  createTeams(playerNamesList);

};



const createTeams = (namesList) => {
 
  const firstTeam = [];
  const secondTeam = [];
  const namesListLength = namesList.length;

  for (let i = 0; i < namesListLength; i++) {
    const randomNumber = Math.floor(Math.random() * namesList.length);
    const selectedName = namesList.splice(randomNumber, 1)[0]; // Rastgele seçilen ismi listeden kaldır
    if (selectedName != "") {
      if (i % 2 === 0) {
        firstTeam.push(selectedName);
      } else {
        secondTeam.push(selectedName);
      }
    }
  }

  console.log("First Team:", firstTeam);
  console.log("Second Team:", secondTeam);


};


playerNumber.addEventListener("change", selectOptionFunction);
generateBtn.addEventListener("click", generateTeam);
