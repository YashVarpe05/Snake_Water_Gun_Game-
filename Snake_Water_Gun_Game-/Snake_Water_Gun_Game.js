const prompt = require("prompt-sync")();

console.log("\n \t ***** WELCOME TO THE SNAKE - WATER - GUN *****");
// Snake =water
// water =gun
// gun=snake
let options = ["S", "G", "W"];
let comp;
let comp_index;
let round_count = Number.parseInt(
	prompt(`\n Enter the no of round you want to play`, `10`)
);
let round = 0;
let user_score = 0;
let comp_score = 0;
let count = 0;
let user;

while (round < round_count) {
	user = prompt("\n Enter 'S' for Snake  'W' for Water  'G' for Gun ");
	user = user.toUpperCase();
	comp_index = Math.floor(Math.random() * options.length);
	comp = options[comp_index];

	if (user == "S" || user == "W" || user == "G") {
		if (
			(user == "S" && comp == "W") ||
			(user == "G" && comp == "S") ||
			(user == "W" && comp == "G")
		) {
			console.log(
				`\n You Choose ${user}  & Computer choose  ${comp}  OYE You WIN Congrats ,you Got +1 point's  :)`
			);
			comp_score = comp_score + 0;
			user_score = user_score + 1;
		} else if (
			(user == "S" && comp == "S") ||
			(user == "W" && comp == "W") ||
			(user == "G" && user == "G")
		) {
			console.log(
				`\n OOP's you Choose  ${user} & Computer Choose  ${comp}  Both choose Same option :/ `
			);
		} else {
			console.log(
				`\n You Choose ${user}  & Computer choose  ${comp} OOP's Computer WIN Congrats ,you Got +1 point's  :?`
			);
			comp_score = comp_score + 1;
		}
		round++;
	} else {
		console.log(` You Enter Invalid Option `);
	}
}
console.log(`Your Score ${user_score} & Computer Score ${comp_score} `);
if (user_score > comp_score) {
	console.log(`\n Congrats, You Beat Your Computer!`);
} else if (user_score < comp_score) {
	console.log(`\n Aw Snap, Your Computer Beat You!`);
} else {
	console.log(`\n Good Try, You & Your Computer Both Make A Tie!`);
}
