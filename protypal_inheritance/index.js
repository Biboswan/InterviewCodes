let arr=["Biboswan","Sunny"];
let object = {
	name: "Biboswan",
	city: "Kolkata",
	getIntro: function() {
		console.log(this.name+"from "+this.city);
	}
}

//object._proto_.filter ... object.prototype
object._proto_._proto_._proto_

function fun() {
	//
}

let object2 = {
	name: "Name"
}

object2._proto_ = object;
object2.name 
//Biboswan
object2.getIntro()
//Name from Kolkata
//It goes down the chain trying to find required the property


Function.prototype.mybind = function() {
	console.log("shh");
}

function fun() {
	console.log('Hi');
}
