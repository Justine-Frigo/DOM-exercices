const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const wrapper = document.querySelector(".displayedsquare-wrapper");

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());

  let div = document.createElement("div");
  div.classList = e.target.classList;
  div.classList.toggle("displayedsquare");

  div.addEventListener("click", () => {
    window.alert("The color is " + div.classList[1]);
  });

  wrapper.appendChild(div);

  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerText =
    "[" +
    getElapsedTime() +
    "]" +
    " Create a new " +
    div.classList[1] +
    " square";
  ul.appendChild(li);
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}

let body = document.body;
body.addEventListener("keyup", (e) => {
  let ul = document.querySelector("ul");

  if (e.code === "Space") {
    bgColor = getRandomColor();
    document.body.style.backgroundColor = getRandomColor();

    let li = document.createElement("li");
    li.innerText = "The background color is " + bgColor;
    ul.appendChild(li);
  } else if (e.code === "KeyL") {
    while (ul.childElementCount > 0) {
      ul.removeChild(ul.lastElementChild);
    }
  } else if (e.code === "KeyS") {
    while (wrapper.childElementCount > 0) {
      wrapper.removeChild(wrapper.lastElementChild);
    }
  }
});
