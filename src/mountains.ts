export interface Mountain {
    name: string;
    height: number;
}

const mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 },
];
// Declare a function-findNameOfTallestMountain. It takes one parameter, an array of Mountain objects
// returns string, the name of the tallest mountain. If the array argument is empty, return an empty string ("").

function findNameOfTallestMountain(mountains: Mountain[]): string {
    if (!mountains) return "";

    let highestMt = mountains[0];
    mountains.forEach((mount) => {
        if (mount.height > highestMt.height) {
            highestMt = mount;
        }
    });
    return highestMt;
}
const tallestPeak = findNameOfTallestMountain(mountains);
console.log(tallestPeak);

console.log(tallestPeak);
// Call findNameOfTallestMountain, passing it your mountains array as an argument.

// Store the result of the function call (the return value) in a variable and then console.log the variable. (Hint: It will print “Everest”.)
