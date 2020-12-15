var x = 1;
b();
console.log(x);

const a = () => {
    let y = 10;
    console.log(y);
}

function b() {
    var x = 100;
    console.log(x);
}

a();


