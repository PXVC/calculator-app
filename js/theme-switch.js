let circle = document.querySelector(".circle"),
	check = document.querySelectorAll(".check");

check.forEach((obj, idx) => {
	obj.addEventListener("click", () => {
		var number = idx+ 1
		circle.style.transform = "translateX(calc(25px*" + idx + ")";
		console.log(number);
		document.body.setAttribute("data-theme", "theme-" + number);
	})
})