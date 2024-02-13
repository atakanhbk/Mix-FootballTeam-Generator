const generateBtn = document.getElementsByClassName("generateBtn")[0];
const nameTextArea = document.getElementsByClassName("names")[0];
const firstTeamMembers =
  document.getElementsByClassName("first-team-members")[0];
const secondTeamMembers = document.getElementsByClassName(
  "second-team-members"
)[0];

const seperateNamesToList = () => {
  const namesList = nameTextArea.value.split(",");

  createTeams(namesList);
};

const createTeams = (namesList) => {
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

// Button Click Event Listener
generateBtn.addEventListener("click", seperateNamesToList);
