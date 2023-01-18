//배열(Array)

const daysOfWeek=["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
//Get Item from Array
console.log(daysOfWeek[5]);

//Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//Object

const player={
	name : "cocoa",
	points : 10,
	fat : true,
};
console.log(player);
console.log(player.name);
//Object 안에 특성 추가하기 (const랑은 관계없음. player자체를 건드리는 게 아니기에)
player.gender="Male";
console.log(player);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//function : 어떤 코드를 캡슐화 해서, 실행을 여러 번 할 수 있게 해줌
//function은 ()가 필요해(작성할 때도, 작동시킬 때도)

console.log("Hello. My name is A");
console.log("Hello. My name is B");
console.log("Hello. My name is C");
console.log("Hello. My name is D");
console.log("Hello. My name is e");

function sayHello(){
	console.log("Hello. My name is ");
}

sayHello();

//sayHello에 데이터 보내는 법
//sayHello(데이터 값);
//그렇다면 데이터 받는 법은?
//argument : function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
/*	function sayHello(argument){
			console.log("Hello. My name is ");
		}
*/

function sayHello(nameOfPerson, age){
	console.log("Hello. My name is " + nameOfPerson);
	console.log("I am " + age +"years old." );
}

sayHello("cocoa", 10);

//계산기 만들기

function plus(a,b){
	console.log(a+b);
}

plus(5,4);

function divide(a,b){
	console.log(a/b);
}

divide(10,2);


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
//object 안에 있는 function

const player01={
	name : "cocoa",
	sayHello: function(otherPlayerName){
		console.log("Hello! " + otherPlayerName);
	},
};
console.log(player01.name);
player01.sayHello("kakao");

var appleColor="red";
var appleColor = "yellow";