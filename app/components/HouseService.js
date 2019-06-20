import House from "../models/house.js";

let _state = {
  houses: []
}

_state.houses.push(new House({ bedrooms: 2, sqFeet: 820, type: "Apartment", color: "beige", location: "Boise" }))
_state.houses.push(new House({ bedrooms: 4, sqFeet: 2800, type: "House", color: "brown", location: "Eagle" }))

let _subscribers = {
  houses: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class HouseService {
  constructor() {
    console.log("house service works", this.Houses)
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Houses() {
    return _state.houses.map(house => new House(house))
  }

  addHouse(newHouse) {
    let temp = this.Houses
    temp.push(new House(newHouse))
    setState("houses", temp)
  }
}