// Deboucing in Javascript

let counter =0;
const getData = () => {
	//calls an API and gets Data
	console.log("Fetching Data .. "+ counter++);
};

const doSomeMagic = (d) => {
	let timer;
	return () => {
    console.log(timer);
		clearTimeout(timer);
		timer = setTimeout(getData, d);
	};
}

const betterfunction = doSomeMagic(300);