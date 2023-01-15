export class Player {
    name: string = "Matt";
    jerseyNumber: number;

    // Constructor sets the initial values for our classes properties.
    constructor(name: string, jerseyNumber: number) {
        this.name = name;
        this.jerseyNumber = jerseyNumber;
    }

    // Methods
    getName(): string {
        return this.name;
    }
}

export class Car {
    speed: number = 1;

    constructor(speed: number = 1) {
        this.speed = speed;
    }

    accelerate(acceleration: number = 1) {
        this.speed += acceleration;
    }
}

class Honda extends Car {
    public make = "Honda";
}
class Chevy extends Car {
    public make = "Chevy";
}

function buildCar(type?: string): Car {
    if (type === "honda") {
        return new Honda(3);
    }

    return new Car(2);
}

const builtCar = buildCar();

const cars: Car[] = [];

cars.push(new Car());
cars.push(new Honda());
cars.push(new Chevy());

for (let car of cars) {
    console.log(car);
}
