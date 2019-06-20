import HouseService from "./HouseService.js";



let _houseService = new HouseService()

function drawHouses() {
  let housesElem = document.querySelector("#houses")
  let template = ''
  let houses = _houseService.Houses
  houses.forEach(house => {
    template += house.HouseTemplate
  })
  housesElem.innerHTML = template
}

export default class HouseController {
  constructor() {
    console.log("house controller works")
    _houseService.addSubscriber("houses", drawHouses)
    drawHouses()
  }

  addHouse(e) {
    e.preventDefault()
    let form = e.target

    let newHouse = {
      bedrooms: form.bedrooms.value,
      sqFeet: form.sqFeet.value,
      type: form.type.value,
      color: form.color.value,
      location: form.location.value
    }

    _houseService.addHouse(newHouse)
    form.reset()
  }
}