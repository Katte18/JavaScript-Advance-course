const container = document.querySelector('.container')
const colorBtn = document.querySelector("#btn-1");


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



function generateBlocksInterval() {

  setInterval(() => {
        for (let div of container.children) {
            div.style.backgroundColor = getRandomColor();
        }
    }, 1000);
}
generateBlocksInterval();
