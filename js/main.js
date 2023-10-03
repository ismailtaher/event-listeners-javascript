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

  view.addEventListener("click", (event) => {
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  });

  div.addEventListener("click", (event) => {
    div.classList.toggle("blue");
    div.classList.toggle("black");
  });

  h2.addEventListener("click", (event) => {
    const myText = event.target.textContent;
    myText === "My 2nd View"
      ? (event.target.textContent = "Clicked")
      : (event.target.textContent = "My 2nd View");
  });

  // Adding a new Event Listener to our nav

  const nav = document.querySelector("nav");

  // Increases the size of our nav
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });

  // Removes the class the increased the size of our nav
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};
