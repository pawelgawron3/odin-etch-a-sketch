let container = document.querySelector("#container");
let btn = document.querySelector("#create-grid");

const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

function createGrid(size) {
  container.replaceChildren();
  let numOfElements = size ** 2;
  for (let i = 0; i < numOfElements; i++) {
    let rndCol1 = Math.floor(Math.random() * 256);
    let rndCol2 = Math.floor(Math.random() * 256);
    let rndCol3 = Math.floor(Math.random() * 256);

    let innerDiv = document.createElement("div");
    innerDiv.style.width = containerWidth / Math.sqrt(numOfElements) + "px";
    innerDiv.style.height = containerHeight / Math.sqrt(numOfElements) + "px";
    innerDiv.addEventListener("mouseenter", () => {
      innerDiv.style.backgroundColor = `rgb(
        ${rndCol1},
        ${rndCol2},
        ${rndCol3}
      )`;
    });
    container.appendChild(innerDiv);
  }
}

btn.addEventListener("click", () => {
  let userInput = prompt(
    "Select a number of elements per side for new grid: ",
    0
  );
  if (userInput.includes(".") || userInput.includes(",")) {
    alert("Error! Please enter a positive, integer number!");
  } else {
    let size = parseInt(userInput);
    if (size >= 100) {
      alert(
        "Due to potential performance issues please enter a number lower than 100."
      );
    } else if (isNaN(size) || size < 0) {
      alert("Error! Please enter a positive, integer number!");
    } else {
      createGrid(size);
    }
  }
});
