const Calculate = {
	plus: function(a,b){
		console.log( a + " + " + b +" = " + (a+b));
		
	},
	minus: function(a,b){
		console.log(a + " - " + b +" = " + (a-b));
		
	},
	divide: function(a,b){
		console.log(a + " / " + b +" = " + (a/b));
	},
	power: function(a,b){
		console.log(a + " power " + b +" = " + (a**b))
	},
	};


	const resultPlus01 = Calculate.plus(10,20);
	console.log(resultPlus01);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

const Calculate02 = {
	plus: function(a,b){
		return a+b;
		
	},
	minus: function(a,b){
		return a-b;
		
	},
	divide: function(a,b){
		return a/b
	},
	power: function(a,b){
		return a**b
	},
	};

	const resultPlus = Calculate02.plus(5,1);
	console.log(resultPlus);