// Individual Imports
import { add, subtract} from './add';

//Default Imports
import log from './utils';

// Default and Individual Imports
import logValue, {print} from './utils';

import { Car, Truck } from './interfaces';

const car: Truck  ={
    color: 'red',
    make: 'Honda',
    model: 'Accord',
    year: 2002,
};
function printCar(OurCar: Car){
    console.log('We have a ${ourCar.make} ${ourCar.model}');
    return Car;
}


// Variable type notations
let age: number = 25;

let isEmployed: boolean = true;
let myName: string = 'Robert';


// Array type anotations
let names:string[] = ['Elana', 'Yitzchok', 'Meyer', 'Reuven'];
//Object literals type annotations

const coordinates:{x:number; y: number} = {
    x:10,
    y: 20,
};

//Functions type Annotations
// function add(a:number,b: number): number {
//     return a + b;
// }
//arrow function annotation
//                  parameters        return type
const logString = (names: string) => void = (string) =>{
    console.log(string);
};
const logString = (names: string) :void => {
    console.log(string);
};

//add(18, 5);

//Optional Parameters when we do not want to be required to pass an argument to the function/defaults.
const logNumber = (value?: number = 5) :void => {
    console.log(value);
};
// Default paratier is when we gie the parameter a default value if no argument is passed.
// const logBoolean = (value: boolian = true): void => {
//     console.log (value);
// }
// logNumber():

//INTERFACE


/


// Solution 1
// non null assertin aperator
// console.log(fruit!.length);

//Solution 2
//Nullish coalescing operator
// let (letter: string| null='0'
// console.log ('Hey' ,indexOf(letter ?? 'N'))};
//  )

 //Solution 3
 //add condition logic
//  if(letter !== null{
//     console.log('Hey' .indexOf(letter));
//  }else {
 //console.log('Hey' .indexOf ('h'))
}
//  Solutions 4// Optional changing operator
// console.log(fruit?.length);
