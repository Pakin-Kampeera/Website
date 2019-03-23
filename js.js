var stored = "0";
var current = "0";
var operation = 0;
var MaxLength = 10;

document.getElementById("clear").addEventListener("click", clearDisp);
document.getElementById("dot").addEventListener("click", addDot);
document.getElementById("eval").addEventListener("click", calculate);

var all_num = document.getElementsByClassName("num")

for (var i = 0; i < all_num.length; i++) {

	all_num[i].addEventListener("click", function () {
		addDigit(this);
	});
}

var all_ops = document.getElementsByClassName("ops")

for (var i = 0; i < all_ops.length; i++) {

	all_ops[i].addEventListener("click", function () {
		operate(this);
	});
}

function addDigit(dig_obj) {

	dig = dig_obj.value;

	if (current.length > MaxLength) {

		current = "Too long";

	} else if (eval(current) == 0 && current.indexOf(".") == -1) {

		current = dig;

	} else {

		current = current + dig;
	}

	document.getElementById("display").innerHTML = current;
}

function addDot() {

	if (current.length == 0) {
		current = "0.";

	} else if (current.indexOf(".") == -1) {

		current = current + ".";
	}

	document.getElementById("display").innerHTML = current;
}


function clearDisp() {

	stored = "0";
	current = "0";
	document.getElementById("display").innerHTML = current;
}


function operate(op_obj) {

	op = op_obj.value;

	if (op.indexOf("+") > -1) {
		operation = 1;
	}
	if (op.indexOf("-") > -1) {
		operation = 2;
	}
	if (op.indexOf("*") > -1) {
		operation = 3;
	}
	if (op.indexOf("/") > -1) {
		operation = 4;
	}
	//third row
	if (op.indexOf("power") > -1) {
		operation = 5;
	}
	if (op.indexOf("square") > -1) {
		operation = 6;
	}
	if (op.indexOf("log") > -1) {
		operation = 7;
	}

	stored = current;
	current = "";
}

function calculate() {

	tmp = current;

	if (operation == 1) {
		current = eval(stored) + eval(current);
	};
	if (operation == 2) {
		current = eval(stored) - eval(current);
	};
	if (operation == 3) {
		current = eval(stored) * eval(current);
	};
	if (operation == 4) {
		current = eval(stored) / eval(current);
	};
	//third row
	if (operation == 5) {
		current = Math.pow(eval(stored), eval(current));
	};
	if (operation == 6) {
		current = Math.pow(eval(stored), (1 / eval(current)));
	};
	if (operation == 7) {
		current = Math.log(eval(stored)) / Math.log(eval(current));
	};
	if (current.toString().length > MaxLength) {
		current = "Too long";
	};

	document.getElementById("display").innerHTML = current;

	stored = current;
}

document.getElementById("toggle").addEventListener("click", toggle);

function toggle() {
	current = -1 * current;
	document.getElementById("display").innerHTML = current;
}

document.getElementById("percent").addEventListener("click", percent);

function percent() {
	current = current / 100;
	document.getElementById("display").innerHTML = current;
}

//first row
document.getElementById("qua").addEventListener("click", qua);

function qua() {
	current = current * current;
	document.getElementById("display").innerHTML = current;
}

document.getElementById("expo").addEventListener("click", expo);

function expo() {
	current = Math.pow(2, current);
	document.getElementById("display").innerHTML = current;
}

document.getElementById("expo1").addEventListener("click", expo1);

function expo1() {
	current = Math.pow(10, current);
	document.getElementById("display").innerHTML = current;
}

//second row
document.getElementById("divide").addEventListener("click", divide);

function divide() {
	current = 1 / current;
	document.getElementById("display").innerHTML = current;
}

document.getElementById("sqrt").addEventListener("click", sqrt);

function sqrt() {
	current = Math.sqrt(current);
	document.getElementById("display").innerHTML = current;
}

document.getElementById("ln").addEventListener("click", ln);

function ln() {
	current = Math.log(current);
	document.getElementById("display").innerHTML = current;
}

//fourth row
document.getElementById("e_operate").addEventListener("click", e_operate);

function e_operate() {
	current = Math.E;
	document.getElementById("display").innerHTML = current;
}

document.getElementById("pie").addEventListener("click", pie);

function pie() {
	current = Math.PI;
	document.getElementById("display").innerHTML = current;
}

document.getElementById("rand").addEventListener("click", rand);

function rand() {
	current = Math.random();
	document.getElementById("display").innerHTML = current;
}

//fifth row
document.getElementById("fact").addEventListener("click", fact);

function fact() {
	var ans = 1;
	for (var i = 1; i <= current; i++) {
		ans = ans * i;
	}
	document.getElementById("display").innerHTML = ans;
}

document.getElementById("sum").addEventListener("click", sum);

function sum() {
	var ans = 0;
	for (var i = 1; i <= current; i++) {
		ans = ans + i;
	}
	document.getElementById("display").innerHTML = ans;
}

document.getElementById("prime").addEventListener("click", prime);

function prime() {
	var count = 0;
	for (var i = 1; i <= current; i++) {
		if (current % i == 0) {
			count++;
		}
	}

	if (count == 2) {
		document.getElementById("display").innerHTML = "prime number";
	} else {
		document.getElementById("display").innerHTML = "not prime number";
	}
}