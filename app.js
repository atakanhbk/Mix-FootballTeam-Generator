const playerNumber = document.getElementsByClassName("playerNumber")[0];
const playerNames = document.getElementsByClassName("player-names")[0];
const generateBtn = document.getElementsByClassName("generateBtn")[0];
const firstTeamMembers =
  document.getElementsByClassName("first-team-members")[0];
const secondTeamMembers = document.getElementsByClassName(
  "second-team-members"
)[0];
const inputForm = document.getElementsByClassName("input-form")[0];

const selectOptionFunction = () => {
  playerNames.innerHTML = "";
  const playerNumberInt = parseInt(playerNumber.value);
  for (let i = 0; i < playerNumberInt; i++) {
    const playerInputPartDiv = `
    <div class="player">
    <h3>Player Name </h3>
    <input class="player-name" required>
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

const generateTeam = (e) => {
 
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
  e.preventDefault();

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

  getValueAvarageOfTeams(firstTeam, secondTeam);
};

const getValueAvarageOfTeams = (firstTeam, secondTeam) => {
  let firstTeamValuePoint = 0;
  let secondTeamValuePoint = 0;
  let firstTeamAverage = 0;
  let secondTeamAverage = 0;

  firstTeam.forEach((element) => {
    const valueINT = parseInt(element.value);
    firstTeamValuePoint += valueINT;
  });

  secondTeam.forEach((element) => {
    const valueINT = parseInt(element.value);
    secondTeamValuePoint += valueINT;
  });

  firstTeamAverage = firstTeamValuePoint / firstTeam.length;
  secondTeamAverage = secondTeamValuePoint / secondTeam.length;
  const firstTeamField = firstTeamMembers.parentNode;
  const secondTeamField = secondTeamMembers.parentNode;

  const teamsValue = document.querySelectorAll(".team-average-point");

  teamsValue.forEach((element) => {
    element.remove();
  });

  const resultFirstTeam = document.createElement("p");
  resultFirstTeam.className = "team-average-point";
  resultFirstTeam.textContent = `Team 1 Average Point = ${Math.round(
    firstTeamAverage
  )}`;
  firstTeamField.appendChild(resultFirstTeam);

  const resultSecondTeam = document.createElement("p");
  resultSecondTeam.className = "team-average-point";
  resultSecondTeam.textContent = `Team 2 Average Point = ${Math.round(
    secondTeamAverage
  )}`;
  secondTeamField.appendChild(resultSecondTeam);

  if (
    firstTeamAverage > secondTeamAverage + 0.5 ||
    firstTeamAverage < secondTeamAverage - 0.5
  ) {
    generateTeam();
  }
};

playerNumber.addEventListener("change", selectOptionFunction);
inputForm.addEventListener("submit", generateTeam);

window.addEventListener("load", () => {
  selectOptionFunction();
});
