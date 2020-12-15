
// Function Statement aka Function Declaration
function a() {
    console.log('a called');
}

// Function Expression
var b = function () {
    console.log('a called');
}

// Anonymous Function
/** 
    function () {

    }
*/

// Named Function Expression 
var c = function xyz() {
    console.log('c called');
    xyz();
}

a();
b();
c();
xyz(); // Reference error since xyz has local scope not global

// First Class Functions: Returned as value, passed as argument, assigned to a variable