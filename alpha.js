function continueGame() {
  //    generate  a random number
  const alphabate = getRanadomAlphabate();
  console.log("ur random alphabate is ", alphabate);
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

/*ei jinis ta onnovave kora jabe,
kemne boli

arekta js file khulba,
oikhne function gula impliment koraba,
and eikhane theke oi funtion gula call korba,
ar argument hisabe tumi jei jei section niye kaj korte chaccho oitar cls name pataba






*/
