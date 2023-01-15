// Individual imports
import { add, subtract } from "./add";
// Default import
// import log from './utils';
// Utils
//  utils = { print }
// Default and individual import
import log, { print } from "./utils";

import { Car, Truck } from "./interfaces";

const car: Car = {
    make: "Honda",
    model: "Accord",
    year: 2004,
    color: "red",
};

function printCar(ourCar: Car): Car {
    console.log(`We have a ${ourCar.make} ${ourCar.model}`);
    return ourCar;
}

// printCar(car);

// print('Hello World Yay!');
// log('Hello World Super Yay!');

const sum = add(2, 2);
// console.log(sum);

const result = subtract(4, 2);
// console.log(result);

// Variable type anotations
let age: number = 25;
let isEmployed: boolean = true;
let myName: string = "Jalen";
let nothing: null = null;
let nothingMore: undefined = undefined;

// Arrays type anotations
let names: string[] = ["Jalen", "Ren", "Marlee", "Ian"];

// Object liters type anotations
const coordinates: { x: number; y: number } = {
    x: 10,
    y: 20,
};

// Functions type anotations
// function add(a: number, b: number): number {
//   return a + b;
// }

// const logString: (value: string) => void = (value) => {
//   console.log(value);
// };
const logString = (value: string): void => {
    console.log(value);
};

// add(10, 5);

// Optional Parameters

// Optional parameter is when we do not want to be required to pass an argument to the function.
const logNumber = (value?: number): void => {
    console.log(value);
};

// Default parameter is when we give the paramter/s a default value if no argument is passed.
const logBoolean = (value: boolean = true): void => {
    console.log(value);
};

// logNumber();
// logBoolean();
// logBoolean(false);

// type Person = {
//   name: string;
//   age: number;
// };

// const people: Person[] = [
//   { name: 'Jalen', age: 10 },
//   { name: 'Jeff', age: 12 },
// ];

// people.forEach((person: Person) => {
//   console.log(person.name);
// });

// Interfaces
interface Person {
    firstName: string;
    lastName: string;
    isEmployed?: boolean;
}

const person: Person = {
    firstName: "Jalen",
    lastName: "Parham",
    isEmployed: true,
};

// let fruit: string | null;

// fruit = 'apple';
// fruit = null;

const fruits = ["apple", "pear", "peach", "watermelon"];
const fruit: string | undefined = fruits.find((ourFruit) =>
    ourFruit.startsWith("z")
);

// Solution 1
// Non null assertion operatior
// console.log(fruit!.length);

// Solution 2
// Nullish coalescing operator
let letter: string | null = null;
// console.log('Hey'.indexOf(letter ?? 'H'));

// Solution 3
// Add conditional logic
if (letter !== null) {
    // console.log('Hey'.indexOf(letter));
} else {
    // console.log('letter was null or undefined');
    // console.log('Hey'.indexOf('H'));
}

// Solution 4
// Optional chainging operator
// console.log(fruit?.length);

// Classes
class Player {
    // protected name: string;
    // protected jerseyNumber: number;

    // constructor(name: string, jerseyNumber: number) {
    //   this.name = name;
    //   this.jerseyNumber = jerseyNumber;
    // }

    constructor(protected name: string, protected jerseyNumber: number) {}

    // Methods
    protected getName(): string {
        return this.name;
    }
}
class TeamPlayer extends Player {
    teamName: string;

    constructor(name: string, jerseyNumber: number, teamName: string) {
        super(name, jerseyNumber);
        this.teamName = teamName;
    }

    getName() {
        return `${this.name} is really cool.`;
    }

    getTeam() {
        // this.jerseyNumber = 5;
        return `${super.getName()} plays for the ${this.teamName}`;
    }
}

let playerClass: Player;

playerClass = new Player("Jalen", 4);
playerClass = new TeamPlayer("Jalen", 4, "Oilers");

const player = new Player("Jalen", 4);
const player1 = new Player("Player 1", 1);
const player2 = new Player("Player 2", 2);

const teamPlayer = new TeamPlayer("Jalen", 4, "Oilers");

console.log(teamPlayer.getTeam());
console.log(teamPlayer.getName());

// console.log(`${player1.getName()} vs ${player2.getName()}`);
// console.log(player1.name, player1.jerseyNumber);
interface Animal{

    name: string;
    talk: () => string;
    greet: (greeting: string) => void;
} 



// Classes, methods and objects




// When there is a property on an object or class that is a function, it is called a method.
const dog: Animal = {
    name: 'Pablo',
    talk(){
        return 'Wolf wolf';
    },
    greet(greeting: string){
        console.log(`${this.talk()} ${greeting}, My name is ${this.name}!`);
    },
};

class Dog implements Animal {
    // This is the way you do it if you do not use the class modifier.
    // Name:string
    // constructor(name:string) {
    //         this.name =name;
    }


    // defines our property and sets it.
    constructor(public name:string){}

    talk() {
        return 'Wolf wolf';
    }
greet(greeting: string){ 
        console.log(`${this.talk()} ${greeting}, My name is ${this.name}!`);
    }
}
const pable = new Dog('Pablo');
pablo.greet ('HI');

