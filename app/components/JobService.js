import Job from "../models/job.js";



let _jobs = [
  new Job({ title: "Janitor", company: "Boise School District", salary: 28000, industry: "Service" }),
  new Job({ title: "Esthetician", company: "Keller Skin Care", salary: 35000, industry: "Skin Care" })
]

export default class JobService {
  constructor() {
    console.log("job service works", _jobs)
  }

  get Jobs() {
    return _jobs.map(job => new Job(job))
  }

  addJob(newJob) {
    _jobs.push(new Job(newJob))
  }
}