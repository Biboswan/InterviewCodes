//https://www.youtube.com/watch?v=aVSf0b1jVKk&t=67s
//Event bubbling
/*
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked!");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent Clicked!");
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  false
);
*/

//Event bubbling
/*
document.querySelector("#grandparent").addEventListener("click", () => {
    console.log("Grandparent Clicked!");
});

document.querySelector("#parent").addEventListener("click", () => {
    console.log("parent Clicked!");
});
document.querySelector("#child").addEventListener("click", () => {
    console.log("child");
});
*/

console.log(5);

//Event Capturing/Trickling

//Goes up to highest parent and end stops at the element from where event is propagated

document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent Clicked!");
  },
  true
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true
);

//Capturing and Bubbling Together
/* 
document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked!");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent Clicked!");
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true
);
*/
