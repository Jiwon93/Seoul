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

const age = 10;
function calculateKrAge(ageOfForeigner) {
	return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);
console.log(krAge);