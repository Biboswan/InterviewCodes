let name = {
  firstname: "Akshay",
  lastName: "Saini",
  printfulName: function(hometown, state) {
    console.log(
      this.firstname + " " + this.lastName + " from " + hometown + " " + state
    );
  }
};

name.printfulName();

let name2 = {
  firstname: "Sachin",
  lastName: "Tendular"
};

name.printfulName.call(name, "Dehradun");
// function borrowing
name.printfulName.call(name2, "Pune", "Maharastra");

//
name.printfulName.apply(name2, ["Pune", "Maharastra"]);

let printfulName = function(hometown, state) {
  console.log(
    this.firstname + " " + this.lastName + " from " + hometown + " " + state
  );
};

//bind returns a copy of the method to be called later
let printMyName = printfulName.bind(name, "kolkata", "WB");

//console.log(printMyName);

console.log(printMyName());
