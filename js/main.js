// Event Listeners JavaScript

/* const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2"); */

// Syntax: addEventListener(event, function, useCapture)

/* const doSomething = () => {
  alert("Doing Something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false); */

// Anonymous function with an Event Listener

/* h2.addEventListener("click", (event) => {
  console.log(event.target);
  event.target.textContent = "Clicked";
}); */

// Ready State Change Event

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      view.style.background = "purple";
    },
    true
  );

  div.addEventListener(
    "click",
    (event) => {
      div.style.background = "blue";
    },
    true
  );

  h2.addEventListener(
    "click",
    (event) => {
      event.target.textContent = "Clicked";
    },
    true
  );
};
