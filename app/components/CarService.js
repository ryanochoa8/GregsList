import Car from "../models/car.js";


let _cars = [
  new Car({ make: "Chevy", model: "Trailblazer", year: 2002, color: "red" }),
  new Car({ make: "Lexus", model: "RX 350", year: 1999, color: "black" })
]


export default class CarService {
  constructor() {
    console.log("car service works", _cars)
  }

  get Cars() {
    return _cars.map(car => new Car(car))
  }

  addCar(newCar) {
    _cars.push(new Car(newCar))
  }
}