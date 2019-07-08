let multiply = function(x,y) {
	console.log(x+y);
}

// Using bind

//preseting some values of function and creating a new fucntion 
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(5);

multiplyByThree = multiply.bind(this,2);
multiplyByThree(5);

//Using closure

let multiply2 = function(x) => {
	return fucntion(y) {
		console.log(x+y);
	}
}

let multiply2ByTwo = multiply2(2)
multiply2ByTwo(5);







