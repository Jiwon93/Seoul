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

const daysOfWeek = ["mon", "tue", "wed", "thu", "fir", "sat"];
//const nonsense = [1, 2, "hello", false, null, true, "jiwon"];


// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(toBuy[0]);