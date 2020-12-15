function a() {
    var b = 10;
    c();

    function c() {
        console.log(b);  // local -> closure(a)-> global (scope)
    }
}

a();
console.log(b);
