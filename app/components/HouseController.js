import HouseService from "./HouseService.js";



let _houseService = new HouseService()

function drawHouse() {
  let houseElem = document.querySelector("#houses")
  let template = ''
  let house = _houseService.House
  house.forEach(house => {
    template += house.HouseTemplate
  })
  houseElem.innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("house controller works")
    drawHouse()
  }

  addHouses(e) {
    e.preventDefault()
    let form = e.target

    let newHouse = {
      bedrooms: form.bedrooms.value,
      sqFeet: form.sqFeet.value,
      type: form.type.value,
      color: form.color.value,
      location: form.location.value
    }

    _houseService.addHouses(newHouse)
    form.reset()
    drawHouse()
  }
}