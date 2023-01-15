class Room {
  available = true;
  //parameters that create object Properties for a new object
  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
  }
  //methods for all following classes
  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}

const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20, 18);

//Room1
console.log(room1.name);
console.log(room1.length);
console.log(room1.width);
console.log(room1.getArea());
console.log(room1.getPerimeter());

//Room2
console.log(room2.name);
console.log(room2.length);
console.log(room2.width);
console.log(room2.getArea());
console.log(room2.getPerimeter());
