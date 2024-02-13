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
  const namesListLength = namesList.length;

  for (let i = 0; i < namesListLength; i++) {
    const randomNumber = Math.floor(Math.random() * namesList.length);
    const selectedName = namesList.splice(randomNumber, 1)[0]; // Rastgele seçilen ismi listeden kaldır
    if (i % 2 === 0) {
      createTeamMemberNames(1, selectedName);
    } else {
      createTeamMemberNames(2, selectedName);
    }
  }
};

const createTeamMemberNames = (whichTeam, selectedName) => {
  const teamMemberName = document.createElement("h3");
  teamMemberName.textContent = `${selectedName}`;
  if (whichTeam === 1) {
    firstTeamMembers.appendChild(teamMemberName);
  } else {
    secondTeamMembers.appendChild(teamMemberName);
  }
};

// Button Click Event Listener
generateBtn.addEventListener("click", seperateNamesToList);
