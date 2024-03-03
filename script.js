// document.querySelector(".heading").textContent = "mahadev";
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = " ⛔️no number";
  }

  if (guess === number) {
    document.querySelector(".message").textContent =
      "🏆Correct Number (😎you win) ";

    document.querySelector("body").style.backgroundColor = "green";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = "highscore";
    }
    document.querySelector("#video").style.display = "block";
    // // document.querySelector("#vidsource").style.src = 'block';
    document.querySelector("#video").src = "thala.mp4";

    document.querySelector(".number").textContent = number;
  } else if (guess > number) {
    document.querySelector(".message").textContent = "Too high  ";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Too low";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = 0;
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".guess").value = " ";
  document.querySelector("#video").style.display = "none";
  // // document.querySelector("#vidsource").style.src = 'block';
  document.querySelector("#video").src = "";
});
