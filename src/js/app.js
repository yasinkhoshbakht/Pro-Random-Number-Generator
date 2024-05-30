let defaultNumber = 0;
let randomNumberText = document.querySelector(".randomNumberText");
let generateBtn = document.querySelector("#generateBtn");
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let randomNumber = Math.floor(Math.random() * 1000);
  interval = setInterval(() => {
    if (defaultNumber < randomNumber) {
      defaultNumber++;
    } else if (defaultNumber > randomNumber) {
      defaultNumber--;
    } else {
      clearInterval(interval);
    }
    randomNumberText.innerHTML = defaultNumber;
  }, 1);
});
