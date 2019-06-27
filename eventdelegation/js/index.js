//Event delegation achieved using event bubbling
document.querySelector("#category").addEventListener("click", e => {
  console.log(e.target.id);
  if (e.target.tagName == "LI") {
    window.location.href = "/" + e.target.id;
  }
});

//Saving memory by reducing no. of event listeners using event delgations

//Behaviour pattern using event delegation
