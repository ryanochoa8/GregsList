import Car from "../models/car.js";

let _state = {
  cars: []
}

_state.cars.push(new Car({ make: "Chevy", model: "Trailblazer", year: 2002, color: "red" }))
_state.cars.push(new Car({ make: "Lexus", model: "RX 350", year: 1999, color: "black" }))

let _subscribers = {
  cars: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class CarService {
  constructor() {
    console.log("car service works", this.Cars)
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Cars() {
    return _state.cars.map(car => new Car(car))
  }

  addCar(newCar) {
    let temp = this.Cars
    temp.push(new Car(newCar))
    setState("cars", temp)
  }
}