let name1 = "Richard";
let name2 = "Bart";
let name3 = "Louis";

let name1Size = name1.length;
let name2Size = name2.length;
let name3Size = name3.length;

if (name1Size > name2Size && name1Size > name3Size) {
    console.log(`${name1} has the longest name.`);
} else if (name2Size > name1Size && name2Size > name3Size) {
    console.log(`${name2} has the longest name.`);
} else if (name3Size > name1Size && name3Size > name2Size) {
    console.log(`${name3} has the longest name`);
} else if (name1Size === name2Size && name3Size !== name1Size) {
    console.log(`${name1} and ${name2} tie for the longest name.`);
} else if (name2Size === name3Size && name1Size < name2Size) {
    console.log(`${name2} and ${name3} tie for the longest name`);
} else if (name1Size === name3Size && name2Size < name1Size) {
    console.log(`${name1} and ${name3} tie for the longest name.`);
} else {
    console.log(`All three names are the same length.`);
}
