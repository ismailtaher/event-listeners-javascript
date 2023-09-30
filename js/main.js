// Event Listeners JavaScript

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
  alert("Doing Something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);
