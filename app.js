const generateBtn = document.getElementsByClassName("generateBtn")[0];
const nameTextArea = document.getElementsByClassName("names")[0];

const clickedGenerateBtn = () => {
  const namesList = nameTextArea.value.split(",");
  createTeams(namesList);
};

const createTeams = (namesList) => {
  const firstTeam = [];
  const secondTeam = [];
  const namesListLength = namesList.length;

  for (let i = 0; i < namesListLength; i++) {
    const randomNumber = Math.floor(Math.random() * namesList.length);
    const selectedName = namesList.splice(randomNumber, 1)[0]; // Rastgele seçilen ismi listeden kaldır
    if (i % 2 === 0) {
      firstTeam.push(selectedName);
    } else {
      secondTeam.push(selectedName);
    }
  }

  console.log("First Team:", firstTeam);
  console.log("Second Team:", secondTeam);
};
generateBtn.addEventListener("click", clickedGenerateBtn);
