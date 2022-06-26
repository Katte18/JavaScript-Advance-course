const container = document.querySelector('.container')
const buttonStart = document.getElementById("button-start");
let repeat;

function generateBlocks() {
    for (let i = 0; i < 25; i++) {
        let div = document.createElement('div');
        div.classList.add('square')
        div.style.backgroundColor = getRandomColor();
        container.append(div)
    }
}
generateBlocks();

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#"

  for (let i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
 return color;
}

buttonStart.addEventListener("click", Start);
function Start() {
 console.log("started");
  buttonStart.removeEventListener("click", Start);
  buttonStart.addEventListener("click", Stop);
   repeat = setInterval(() => {
    for (let div of container.children) {
         div.style.backgroundColor = getRandomColor();
      }
    }, 1000);
}

function Stop() {
  console.log("stopped");
  buttonStart.removeEventListener("click", Stop);
  buttonStart.addEventListener("click", Start);
  clearInterval(repeat);

}
