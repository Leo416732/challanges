const root = document.querySelector(".root");
const score = document.querySelector("#score");
const resetD = document.querySelector(".resBtn");
const tiles = 16;
let newScore = 0;
function randomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

function updateScore(point) {
  newScore += point;
}

function rgbGenerator() {
  const r = randomNumber(0, 255);
  const g = randomNumber(0, 255);
  const b = randomNumber(0, 255);
  return [r, g, b];
}

//easy mode background color
function getDifferentColor(colors) {
  const newColor = [...colors];
  const random = randomNumber(0, 2);
  if (newColor[random] > 100) {
    newColor[random] -= 50;
  } else {
    newColor[random] += 50;
  }
  return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
}

//normal mode background color
function getDifferentColorNormal(colors) {
  const newColor = [...colors];
  const random = randomNumber(0, 2);
  if (newColor[random] > 100) {
    newColor[random] -= 30;
  } else {
    newColor[random] += 30;
  }
  return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
}

//Hard mode background color
function getDifferentColorHard(colors) {
  const newColor = [...colors];
  const random = randomNumber(0, 2);
  if (newColor[random] > 100) {
    newColor[random] -= 20;
  } else {
    newColor[random] += 20;
  }
  return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
}

//expert mode background color
function getDifferentColorExport(colors) {
  const newColor = [...colors];
  const random = randomNumber(0, 2);
  if (newColor[random] > 100) {
    newColor[random] -= 10;
  } else {
    newColor[random] += 10;
  }
  return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
}

//God mode background color
function getDifferentColorGod(colors) {
  const newColor = [...colors];
  const random = randomNumber(0, 2);
  if (newColor[random] > 100) {
    newColor[random] -= 5;
  } else {
    newColor[random] += 5;
  }
  return `rgb(${newColor[0]},${newColor[1]},${newColor[2]})`;
}
function startGame() {
  root.innerHTML = "";
  const colors = rgbGenerator();
  const randomIndex = randomNumber(0, 8);
  score.innerHTML = `Max score: ${newScore}`;

  for (i = 0; i < tiles; i++) {
    const box = document.createElement("div");
    box.className = "list";
    root.appendChild(box);
    let isDifferent = randomIndex == i;

    //different
    if (isDifferent) {
      box.style.backgroundColor = getDifferentColor(colors);

      //easy mode 
      if(newScore > 0 && newScore < 3){
        console.log(`easy`)
        box.style.backgroundColor = getDifferentColor(colors);
      }
      //normal mode
      else if(newScore > 3 && newScore < 6){
        console.log("normal")
        box.style.backgroundColor = getDifferentColorNormal(colors);
      }
      //hard mode
      else if(newScore > 6 && newScore < 10){
        console.log("hard")
        box.style.backgroundColor = getDifferentColorHard(colors);
      }
      //export mode
      else if(newScore > 10 && newScore < 30){
        console.log("hard")
        box.style.backgroundColor = getDifferentColorExport(colors);
      }
      //god mode
      else if(newScore > 30 && newScore < 1000){
        console.log("god")
        box.style.backgroundColor = getDifferentColorGod(colors);
      }
    } else {
      box.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
    }
    box.addEventListener("click", function () {
      if (isDifferent) {
        updateScore(1);
        startGame();
      }else {
        newScore = 0;
        if (newScore == 0) {
          root.innerHTML =
            "<img class='image' src='https://cdn-icons-png.flaticon.com/512/7371/7371972.png'><button onclick='resetFunction()' class='resBtn'>Reset</button>";
        }
      }
    });
  }
}

startGame();

function resetFunction(){
  startGame()
}
