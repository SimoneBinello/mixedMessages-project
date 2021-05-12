// The program is going to create a short story.

// Assign list of quotes to an array.
let storyPart1 = ["Once upon a time, ", "A long time ago, in a galaxy far far away, ", "In a kingdom far away, ", "In a big futuristic city, "];
let storyPart2 = ["a fox with a majestic tail ", "a robot without a master ", "a group of friends with superpowers ", "a magic tree with rainbow leaves "];
let storyPart3 = ["plan out on a journey in search of a treasure!", "took part in a caravan of acrobats and traveled the world!", "developed a system for space travel and went to another planet!", "opened a magical portal from which mysterious creatures emerged."];

// Create a function that randomly picks a quote from the list.
function randomPicks(array) {
    return (array[Math.floor(Math.random() * array.length)]);
};

// Create a variable that contains the selection from "randomPicks".
let returnedPicks = randomPicks(storyPart1) + randomPicks(storyPart2) + randomPicks(storyPart3);

// Lof the result to the console.
console.log(returnedPicks);