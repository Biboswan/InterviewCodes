let name = {
  firstname: "Bibo",
  lastname: "Roy"
};

let printName = function(city, comm) {
  console.log(
    this.firstname + " " + this.lastname + " from " + city + " " + comm
  );
};

let printMyName = printName.bind(name);
printMyName();
printMyName("Yo");

Function.prototype.mybind = function(...args) {
  let obj = this;
  params = args.slice(1);
  return function(...args2) {
    obj.call(args[0], ...params, ...args2);
  };
};

let printMyName2 = printName.mybind(name, "kolkata");
printMyName2();
printMyName2("Yo");
