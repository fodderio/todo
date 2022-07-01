// Assignment statement

let steps = 5;

// INCREMENTING

steps = steps + 4; // Incrementing by 4

steps += 4; // Incrementing by 4

steps++; // Increment by 1

// DECREMENTING

steps = steps - 1;

steps -= 1;

steps--;

// Variable declaration
let age;

// Variable assignment
age = 5;

// Variable declaration and immediate assignment

let _age = 5;

// FOR LOOP

// for (let steps = 1; steps <= 10; steps++) {
//   console.log("Step forward:", steps);
// }

// console.log("=================");

// for (let steps = 10; steps >= 1; steps--) {
//   console.log("Step backward:", steps);
// }

// let accountBalance = 0;

// let playing = true;

// do {
//   // Do and action and keep repeating the action
//   accountBalance += 10;

//   console.log("Balance: ", accountBalance);

//   playing = false;

// } while (playing);

// let count = 0;

// do {
//   console.log("Do.. While => Count:", count);
// } while (count > 0);

// while (count > 0) {
//   console.log("While => Count:", count);
// }

let people = ["Emem", "Kubiat", "Uwakmfon"];

// people.push("Glory");
// people.push("Frederick");

for (let index = 0; index < people.length; index++) {
  console.log("Person in position", index, "is", people[index]);
}
