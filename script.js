let container = document.querySelector("#container");
let btn = document.querySelector("#create-grid");

const containerWidth = container.clientWidth;
const containerHeight = container.clientHeight;

function createGrid(side) {
  container.replaceChildren();
  let size = side ** 2;
  for (let i = 0; i < size; i++) {
    let rndCol1 = Math.floor(Math.random() * 256);
    let rndCol2 = Math.floor(Math.random() * 256);
    let rndCol3 = Math.floor(Math.random() * 256);

    let innerDiv = document.createElement("div");
    innerDiv.style.width = containerWidth / Math.sqrt(size) + "px";
    innerDiv.style.height = containerHeight / Math.sqrt(size) + "px";
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
  let side = parseInt(userInput);
  if (isNaN(side) || side < 0) {
    alert("Error! Please enter a positive number!");
  } else if (side >= 100) {
    alert(
      "Due to potential performance issues please enter a number lower than 100."
    );
  } else {
    createGrid(side);
  }
});
