// set my color array
// const colors = [
// 	"black",
// 	"purple",
// 	"green",
// 	"yellow",
// 	"indigo",
// 	"blue",
// 	"steelgray",
// 	"orange",
// 	"brown",
// 	"violet",
// 	"red",
// ];

// 1hex codes have 6 digits
// 2create a function that randomly chooses up to 6 numbers and letters

// potential hex letters and numbers
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

//
// select container element
let contain = document.querySelector(".container");

// select button element
let btn = document.querySelector("button");

// select h1element
let headline = document.querySelector("h1");

// select h2element
let hexh2 = document.querySelector("h2");

// eventListener
btn.addEventListener("click", function () {
	// randomizer

	// empty string for newly created hex code
	let hexString = "";
	// for loop that iterates through hex array 6 times
	for (let num = 0; num < 6; num++) {
		// choose randomarray index
		hexString += hex[Math.floor(Math.random() * hex.length)];
		// concat new hex code
		hexCode = `#${hexString}`;
		// append hec code to h2
		hexh2.innerHTML = hexCode;
		// setting background color
		contain.style.backgroundColor = hexCode;
	}

	// setting h1 color
	// if (colors[num] === "black" || colors[num] === "purple") {
	// 	headline.style.color = "white";
	// } else {
	// 	headline.style.color = "black";
	// }
});

// btn.addEventListener("click", function () {
// 	// randomizer

// 	let num = Math.floor(Math.random() * colors.length);

// 	// setting background color
// 	contain.style.backgroundColor = colors[num];
// 	// setting h1 color
// 	if (colors[num] === "black" || colors[num] === "purple") {
// 		headline.style.color = "white";
// 	} else {
// 		headline.style.color = "black";
// 	}
// });
