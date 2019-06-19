import CarController from "./components/CarController.js";
import JobController from "./components/JobController.js";
import HouseController from "./components/HouseController.js";



class App {
  constructor() {
    this.controllers = {
      carController: new CarController(),
      jobController: new JobController(),
      houseController: new HouseController()
    }
  }
}

window['app'] = new App()