const playerNumber = document.getElementsByClassName("playerNumber")[0];
const playerNames = document.getElementsByClassName("player-names")[0];
const generateBtn = document.getElementsByClassName("generateBtn")[0];
const firstTeamMembers =
  document.getElementsByClassName("first-team-members")[0];
const secondTeamMembers = document.getElementsByClassName(
  "second-team-members"
)[0];

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

  let firstTeam = [];
  let secondTeam = [];
  for (let i = 0; i < playerNames.length; i++) {
    const randomTeamSelector = Math.floor(Math.random() * 2);

    const player = {
      name: playerNames[i].value,
      value: playerValues[i].value,
    };
    playersObject.push(player);

    if (randomTeamSelector === 0) {
      if (firstTeam.length <= secondTeam.length) {
        firstTeam.push(player);
      } else {
        secondTeam.push(player);
      }
    } else {
      if (secondTeam.length <= firstTeam.length) {
        secondTeam.push(player);
      } else {
        firstTeam.push(player);
      }
    }
  }

  console.log("First Team = " + firstTeam);
  console.log("Second Team = " + secondTeam);

  addPlayersToTheTeams(firstTeam, secondTeam);
};

const addPlayersToTheTeams = (firstTeam, secondTeam) => {
  firstTeamMembers.innerHTML = "";
  secondTeamMembers.innerHTML = "";
  for (let i = 0; i < firstTeam.length; i++) {
    const teamMemberName = document.createElement("h3");
    teamMemberName.textContent = `${firstTeam[i].name}`;
    firstTeamMembers.appendChild(teamMemberName);
  }

  for (let i = 0; i < secondTeam.length; i++) {
    const teamMemberName = document.createElement("h3");
    teamMemberName.textContent = `${secondTeam[i].name}`;
    secondTeamMembers.appendChild(teamMemberName);
  }

  getValueAvarageOfTeams(firstTeam);
};

const getValueAvarageOfTeams = (firstTeam) => {
  let firstTeamValuePoint = 0;

  firstTeam.forEach((element) => {
    const valueINT = parseInt(element.value);
    firstTeamValuePoint += valueINT;
  });

  console.log(firstTeamValuePoint / firstTeam.length);
};

playerNumber.addEventListener("change", selectOptionFunction);
generateBtn.addEventListener("click", generateTeam);
