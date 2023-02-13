// constants(상수) : 바뀌지 않는 값
//const a = 5;
//const b = 2;
//const myName = "jiwon";

// 업데이트 가능한 변수로 사용 
//let a = 5;
//let b = 2;
//let myName = "jiwon";

// variable(변수) : 예전 방식
//var a = 5;
//var b = 2;
//var myName = "jiwon";

//console.log(a + b);
//console.log(a * b);
//console.log(a / b);
//console.log("hello" + myName);

//myName = "SHinjiwon";

//console.log("My name is" + myName);

// boolean - true or false
//const amIFat = true;
//const amIFat = false;
//const amIFat = null;  아무것도 없다는 것을 의미함(빈값은 아니고 빈공간으로 채워진 개념?)
//console.log(amIFat);

//let something;
//cosole.log(something);  값이 정의 되지 않은 상태

//const mon = "mon";
//const tue = "tue";
//const wed = "wed";
//const thu = "thu";
//const fri = "fri";
//const sat = "sat";
//const sun = "sun";

//const daysOfWeek = ["mon", "tue", "wed", "thu", "fir", "sat"];
//const nonsense = [1, 2, "hello", false, null, true, "jiwon"];

// Get Item from Array
//console.log(daysOfWeek);

// Add one more day to the array
//daysOfWeek.push("sun");

//console.log(daysOfWeek);

//const toBuy = ["potato", "tomato", "pizza"];
//toBuy.push("kimbab");

//console.log(toBuy[0]);

//const playerName = "jiwon";
//const playerPoints = 121212;
//const playerHandsome = true;
//const playerFat = "little bit";

//player.name
//player.points
//player.handsome

//player[0] == name
//player[1] == points


//const player = ["jiwon", 1212, false, "little bit"];

/*
const player = {
	name: "jiwon",
	points: 10,
	fat: true,
};
*/
//console.log(player);
//console.log(player.name);
//console.log(player["name"]);

// constant안에 객체는 추가나 변경이 가능하다 자체는 변경이 안됨.
//console.log(player);
//player.fat = false;
//player.lastName = "potato";
//console.log(player);

/*
console.log("Hello my name is Jiwon");
console.log("Hello my name is Jiwon1");
console.log("Hello my name is Jiwon2");
console.log("Hello my name is Jiwon3");
console.log("Hello my name is Jiwon4");
*/

/*
function sayHello(nameOfPerson, age){
	console.log("Hello my name is" + nameOfPerson + " and I'm " + age);
}

sayHello();
console.log("Hello");
sayHello("jiwon", 10);
sayHello("jiwon1", 23);
sayHello("jiwon2", 30);
*/
/*
function plus(firstNumber, secondNumber) {
	console.log(firstNumber + secondNumber);
}

function divide(a, b) {
	console.log(a / b);
}

plus(9, 60);
divide(98, 20);
*/

/*
const player = {
	name: "jiwon",
	sayHello: function(otherPersonsName) {
		console.log("hello " + otherPersonsName + " nice to meet you!");
	},
};

console.log(player.name);
player.sayHello("lynn");
*/
/*
const calculator = {
	add: function(a, b) {
		console.log(a + b);
	},
	minus: function(a, b) {
		console.log(a - b);
	},
	divide: function(a, b) {
		console.log(a / b);	
	},
	multiple: function(a, b) {
		console.log(a * b);
	},
	power: function(a, b) {
		console.log(a ** b);
	},
};

calculator.add(10, 2);       // 12
calculator.minus(10, 2);     // 8
calculator.divide(10, 2);    // 5
calculator.multiple(10, 2);  // 20
calculator.power(10, 2);     // 100
*/

/*
const calculator = {
	plus: function(a, b) {
		return a + b;
	},
	minus: function(a, b) {
		return a - b;
	},
	times: function(a, b) {
		return a * b;	
	},
	divide: function(a, b) {
		return a / b;
	},
	power: function(a, b) {
		return a ** b;
	},
};

const plusResult = calculator.plus(2, 3);

const age = 10;
function calculateKrAge(ageOfForeigner) {
	return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);
console.log(krAge);
*/

/*
const age = prompt("How old are you?");

console.log(age, parseInt(age));
*/

/*
const age = parseInt(prompt("How old are you?"));

console.log(inNaN(age));

if(condition) {
	/// condition === true
} else {
	/// condition === false
}
*/

// true || true === true
// false || true === true
// true || false === true
// false || false === false
// true && true === true
// false && true === false
// true && false === false
// false && false === false

// = value 할당 === 맞는지 확인
/*
if (isNaN(age) || age < 0) {
	console.log("Please write a real positive number");
} else if(age < 18) {
	console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
	console.log("You can drink");
} else if(age > 50 && age <= 80) {
	console.log("You should exercise");
} else if(age === 100) {
	console.log("wow you are wise");
} else if(age > 80) {
	console.log("You can do whatever you want");
} 

if((a && b) || (c && d) || (x || w)) {
	
}
*/

/*
document.title ="Hello! From JS";

const title = document.getElementById("title");

title.innerText = "Got you!";
*/

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

//const title = document.getElementsByTagName("h1");
//console.log(title);

//해당되는게 많아도, 첫번째 element만 가져옴
const title = document.querySelector(".hello h1"); 
//querySelectAll로 하면 전부가져옴
//id 찾을시 #으로 class는 .으로 표시(css형식)
console.log(title);



function handleTitleClick() {
	console.log("title was clicked!");
	title.style.color = "blue";
}

function handleMouseEnter() {
	title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
	title.innerText = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);


const jpg_path = document.querySelector(".inputFile #jpg_file").files[0].path;

function fcn_jpg2csv(){
    const result = document.querySelector("div .result");
    result.innerText = '${jpg_path}';
}

jpg_path.addEventListener("change", fcn_jpg2csv);
    