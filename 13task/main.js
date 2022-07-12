"use strict"

// task 1

const idGenerator = createIdGenerator();

  function * createIdGenerator() {
    let id = 0;
    while(true) {
      yield ++id;
    };
  }

  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);


// task 2: advanced

const fontGenerator = newFontGenerator(14);

function * newFontGenerator(size) {
  while(true) {
    document.body.style.fontSize = size + 'px';
        let dir = yield size;
          if (dir === 'up') {
            size += 2;
          } else if (dir === 'down') {
            size -= 2;
        };
  };
}

console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);

up.addEventListener("click", () => fontGenerator.next("up"));
down.addEventListener("click", () => fontGenerator.next("down"));
