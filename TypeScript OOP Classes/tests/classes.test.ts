import { Player, Car } from "../src/classes";

describe("Player class", () => {
    test("Contructor sets the inital values for our properties", () => {
        // Arrange
        const name = "Jalen";
        const jerseyNumber = 4;

        const player = new Player(name, jerseyNumber);

        // Assertions
        expect(player.name).toBe(name);
        expect(player.jerseyNumber).toBe(jerseyNumber);
    });

    test("getName method returns the name of the player", () => {
        // Arrange
        const name = "Jalen";
        const jerseyNumber = 4;

        const player = new Player(name, jerseyNumber);

        // Act
        const playerName = player.getName();

        // Assertions
        expect(playerName).toBe(name);
    });
});

describe("Car class", () => {
    test("Sets the speed to an inital value of 0", () => {
        const car = new Car(0);
        expect(car.speed).toBe(0);
    });

    test("It accelerates the speed of the car", () => {
        const car = new Car(0);

        car.accelerate();

        expect(car.speed).toBe(1);
    });

    test("It accelerates the speed of the car by 10", () => {
        const car = new Car(0);

        car.accelerate(10);

        expect(car.speed).toBe(10);
    });
});
