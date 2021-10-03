let screen = document.querySelector(".input");
let number = document.querySelectorAll(".number");
let operator = document.querySelectorAll(".operator");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");
let del = document.getElementById("delete");

// Greeting when open
window.onload = (e) => {
	screen.textContent = "Hello there 😄";
	setTimeout(() => {
		screen.textContent = "0";
	}, 2500);
}

// Number buttons
number.forEach((num) => {
	num.addEventListener("click", () => {
		if (screen.textContent == "0") {
			screen.textContent = screen.textContent.slice(0, -1);
		}
		screen.textContent += num.textContent;
	});
});

// Operator buttons
operator.forEach((opr) => {
	opr.addEventListener("click", () => {
		screen.textContent += opr.textContent;
	});
});  

// RESET button
reset.addEventListener("click", () => {
	if(screen.textContent === "Hello there 😄") {
		setTimeout(() => {
			screen.textContent = "Oh";
		}, 0);
		setTimeout(() => {
			screen.textContent = "Sorry to bother ya'";
		}, 550);
	} else {
		screen.textContent = "0";
	}
});

// "=" button
equal.addEventListener("click", () => {
	try {
		screen.textContent = eval(screen.textContent);
	} catch {
		screen.textContent = "Syntax Error(press RESET)";
	}
});

// DEL button
del.addEventListener("click", () => {
	if (screen.textContent.length <= 1) {
		screen.textContent = "0";
	} else if (screen.textContent === "Hello there 😄" || screen.textContent === "Syntax Error") {
		screen.textContent = screen.textContent;
	} else {
		screen.textContent = screen.textContent.slice(0, -1);
	}
});

if (screen.textContent.length >= 17) {
	screen.textContent = "Hello there";
} 