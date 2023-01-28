const age = parseInt(prompt("How old are you?"));



if(isNaN(age)||age<0){
	console.log("Please write a real positive number");
} else if(age < 18){
	console.log("You can not drink!");
} else if(age>=18 && age < 60) {
	console.log("You can drink");
} else {
	console.log("You can drink but be careful");
}

// getElementsByClassName

const hellos = document.getElementsByClassName("hello");

console.log(hellos);

const title = document.querySelectorAll(".div h1");

console.log(title);