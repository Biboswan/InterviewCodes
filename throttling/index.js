let counter = 0;
let counter2 = 0;
const getData = (...args) => {
    //calls an API and gets Data
    console.log(this);
	console.log("Fetching Data .. "+ counter++);
};

const throttfy = (d, callback) => {
    let nextTime = null;
    return function (){
        console.log("Counter2: "+ counter2++);
        let curr = Date.now();
        let context = this;
        if (nextTime == null || curr >= nextTime) {
            nextTime = curr + d;
            //callback();
            callback.apply(context,arguments);
        }
    }
}

const throttledFunc = throttfy(500, getData);

window.addEventListener("resize",throttledFunc);
