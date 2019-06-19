import House from "../models/house.js";

let _house = [
  new House({ type: "Apartment", bedrooms: 2, sqFeet: 820, color: "beige", location: "Boise" }),
  new House({ type: "House", bedrooms: 4, sqFeet: 2800, color: "brown", location: "Eagle" })
]


export default class HouseService {
  constructor() {
    console.log("house service works", _house)
  }

  get House() {
    return _house.map(house => new House(house))
  }

  addHouses(newHouse) {
    _house.push(new House(newHouse))
  }
}