// Different ways to create objects
var myFirstObject = new Object();
var mySecondObject = {};
var myThirdObject = {
	volume: "Book of Mormon",
	book: "Moroni",
	chapter: "10",
	verses: "3-5",
}

// An object with a method
var generalConference = {
	month: "April",
	location: "Salt Lake City",
	daysUntil: function () {
		var today = new Date();
		var conf = new Date(today.getFullYear(), 3, 6);
		const one_day = 1000*60*60*24;
		return Math.ceil((conf.getTime()-today.getTime())/one_day);
	}
}

// Different ways of handling properties
function changeProperties() {
	myFirstObject.name = "Sterling";
	mySecondObject["temperature"] = 47.3;
	myThirdObject.volume = "New Testament"
	myThirdObject.book = "John"
	myThirdObject["chapter"] = "1"
	myThirdObject["verses"] = "1"
}

// Preparing for multiple instances of an object
var classMates = [];
function ClassMate(lastName, firstName, expertise) {
	this.lastName = lastName,
	this.firstName = firstName,
	this.expertise = expertise,
	this.helloString = function () {
		return "Hail, " + this.firstName + " " + this.lastName + ", master of " + this.expertise;
	}
}

// Create an array of objects
classMates.push(new ClassMate("Wright", "Sterling", "napping"));
classMates.push(new ClassMate("Doe", "John", "Java"));
classMates.push(new ClassMate("Torvalds", "Linus", "Linux"));

function testConstructors() {
	document.getElementById('firstObject').innerHTML = myFirstObject;	
	document.getElementById('secondObject').innerHTML = mySecondObject;	
	document.getElementById('thirdObjectVol').innerHTML = myThirdObject.volume;
	document.getElementById('thirdObjectBook').innerHTML = myThirdObject.book;
	document.getElementById('thirdObjectChap').innerHTML = myThirdObject.chapter;
	document.getElementById('thirdObjectVerse').innerHTML = myThirdObject.verses;
}

function testProperties() {
	changeProperties();
	document.getElementById('firstObject2').innerHTML = myFirstObject.name;	
	document.getElementById('secondObject2').innerHTML = mySecondObject["temperature"];	
	document.getElementById('thirdObjectVol2').innerHTML = myThirdObject.volume;
	document.getElementById('thirdObjectBook2').innerHTML = myThirdObject.book;
	document.getElementById('thirdObjectChap2').innerHTML = myThirdObject["chapter"];
	document.getElementById('thirdObjectVerse2').innerHTML = myThirdObject["verses"];
}

function testMethods() {
	document.getElementById('conferenceMonth').innerHTML = generalConference.month;	
	document.getElementById('conferenceLocation').innerHTML = generalConference.location;	
	document.getElementById('conferenceUntil').innerHTML = generalConference.daysUntil();
}

function testInstances() {
	document.getElementById('instance1').innerHTML = classMates[0]["helloString"]();	
	document.getElementById('instance2').innerHTML = classMates[1]["helloString"]();	
	document.getElementById('instance3').innerHTML = classMates[2]["helloString"]();
}