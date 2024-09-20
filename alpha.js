function handleKeyBtnPress(event) {
  // player jeita press korche.
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);
  //   ja ami chai
  const currentAlphaElement = document.getElementById("current-alpha");
  const currentAlphabate = currentAlphaElement.innerText;
  // screen er alphabate ta tho capital e ache,eita small e nithe hobe,karon capital!==small
  const expectedAlphabate = currentAlphabate.toLowerCase();
  //   console.log(playerPressed, expectedAlphabate);
  if (playerPressed === expectedAlphabate) {
    console.log("you got point my boy");
    // update score
    // 1)get the Score

    const currentScoreElement = document.getElementById("current_score");
    const currentScoreText = currentScoreElement.innerText;
    currentscore = parseInt(currentScoreText);
    // console.log(currentscore);
    // 2)incrs the score
    const newScore = currentscore + 1;
    // 3)show the updated score
    currentScoreElement.innerText = newScore;
    // start new round
    removeBackColor(expectedAlphabate);
    continueGame();
  } else {
    console.log("u miss ur life");
    //1)get the life number
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    currentLife = parseInt(currentLifeText);
    // 2)reduce the life count
    const newlife = currentLife - 1;

    // 3)display the updated life
    currentLifeElement.innerText = newlife;
    if (newlife === 0) {
      const playgroundSection = document.getElementById("sec2");
      playgroundSection.classList.add("hidden");
      const scoreSection = document.getElementById("sec3");
      scoreSection.classList.remove("hidden");
      //   update final score
      // 1)get the final score
      const lastScore = document.getElementById(current_score);
      console.log(lastScore.innerText);
    }
  }
}
document.addEventListener("keyup", handleKeyBtnPress);

function continueGame() {
  //    generate  a random number
  const alphabate = getRanadomAlphabate();
  console.log("ur random alphabate is ", alphabate);
  const currentAlphaElement = document.getElementById("current-alpha");
  currentAlphaElement.innerText = alphabate;
  addBackColor(alphabate);
}
function addBackColor(elementID) {
  const elemnt = document.getElementById(elementID);
  elemnt.classList.add("bg-orange-400");
  //   return elemnt;
}
function removeBackColor(elementID) {
  const elemntt = document.getElementById(elementID);
  elemntt.classList.remove("bg-orange-400");
}
function getRanadomAlphabate() {
  const alphabateString = "abcdefghijklmnopqrstuvwxyz";
  alphabates = alphabateString.split("");
  //   console.log(alphabates);
  //   get a random index
  const randomNumber = Math.random() * 25;
  const ind = Math.round(randomNumber);
  //   console.log(ind);
  const alphabate = alphabates[ind];
  //   console.log(ind, alphabate);
  return alphabate;
}

function play() {
  //   step 1-->hide the home screen
  const homeSection = document.getElementById("sec1");
  homeSection.classList.add("hidden");
  // step 2-->show the playgraound
  const playgroundSection = document.getElementById("sec2");
  playgroundSection.classList.remove("hidden");

  continueGame();
}
function playAgain() {
  console.log("play again clicked");
  //   hide everythig ,just show the playground
  const homeSection = document.getElementById("sec1");
  homeSection.classList.add("hidden");
  const scoreSection = document.getElementById("sec3");
  scoreSection.classList.add("hidden");
  const playgraoundSection = document.getElementById("sec2");
  playgraoundSection.classList.remove("hidden");
  // reset score and life
  const elemnt1 = document.getElementById("current-life");
  elemnt1.innerText = 5;
  const elemnt2 = document.getElementById("current_score");
  elemnt2.innerText = 0;
  continueGame();
}
/*ei jinis ta onnovave kora jabe,
kemne boli

arekta js file khulba,
oikhne function gula impliment koraba,
and eikhane theke oi funtion gula call korba,
ar argument hisabe tumi jei jei section niye kaj korte chaccho oitar cls name pataba
*/
