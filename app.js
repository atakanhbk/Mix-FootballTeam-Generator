const playerNumber = document.getElementsByClassName("playerNumber")[0];
const playerNames = document.getElementsByClassName("player-names")[0];
const generateBtn = document.getElementsByClassName("generateBtn")[0];
const firstTeamMembers =
  document.getElementsByClassName("first-team-members")[0];
const secondTeamMembers = document.getElementsByClassName(
  "second-team-members"
)[0];
let playersObject = [];

const selectOptionFunction = () => {
  let players = []; // Array to store player objects
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

// Button Click Event Listener

const generateTeam = () => {

  const playerName = document.querySelectorAll(".player-name");
  createPlayerObject();
  const playerNamesList = [];
  for (let i = 0; i < playerName.length; i++) {
    playerNamesList.push(playerName[i].value);
  }

  createTeams(playerNamesList);
};

const createPlayerObject = (teamNumber) => {
  const playerName = document.querySelectorAll(".player-name");
  const playerValue = document.querySelectorAll(".playerValue");
  
  for (let i = 0; i < playerValue.length; i++) {
    const player = {
      name : playerName[i].value,
      value : playerValue[i].value,
      teamNumber : teamNumber
    }
    playersObject.push(player);
  }

  console.log(playersObject);

}

const createTeams = (namesList) => {
  const goalKeepers = document.querySelectorAll(".goal-keeper-name");
  firstTeamMembers.innerHTML = "";
  secondTeamMembers.innerHTML = "";
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
  const randomNumberForGoalKeepers = Math.floor(Math.random()*2);
  console.log(goalKeepers[0]);
  

  if (randomNumberForGoalKeepers == 1) {
    firstTeam.push(goalKeepers[randomNumberForGoalKeepers].value);
    secondTeam.push(goalKeepers[randomNumberForGoalKeepers - 1].value);
  }
  else{
    firstTeam.push(goalKeepers[randomNumberForGoalKeepers].value);
    secondTeam.push(goalKeepers[randomNumberForGoalKeepers + 1].value);
  }

  console.log("First Team:", firstTeam);
  console.log("Second Team:", secondTeam);

  createTeamMemberNames(firstTeam, secondTeam);
};

const createTeamMemberNames = (firstTeam, secondTeam) => {
  for (let i = 0; i < firstTeam.length; i++) {
    const teamMemberName = document.createElement("h3");
    teamMemberName.textContent = `${firstTeam[i]}`;
    firstTeamMembers.appendChild(teamMemberName);
  }

  for (let i = 0; i < secondTeam.length; i++) {
    const teamMemberName = document.createElement("h3");
    teamMemberName.textContent = `${secondTeam[i]}`;
    secondTeamMembers.appendChild(teamMemberName);
  }
};

playerNumber.addEventListener("change", selectOptionFunction);
generateBtn.addEventListener("click", generateTeam);
