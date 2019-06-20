import Job from "../models/job.js";

let _state = {
  jobs: []
}

_state.jobs.push(new Job({ title: "Janitor", company: "Boise School District", salary: 28000, industry: "Service" }))
_state.jobs.push(new Job({ title: "Esthetician", company: "Keller Skin Care", salary: 35000, industry: "Skin Care" }))

let _subscribers = {
  jobs: []
}

function setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn());
}

export default class JobService {
  constructor() {
    console.log("job service works", this.Jobs)
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Jobs() {
    return _state.jobs.map(job => new Job(job))
  }

  addJob(newJob) {
    let temp = this.Jobs
    temp.push(new Job(newJob))
    setState("cars", temp)
  }
}