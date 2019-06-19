import JobService from "./JobService.js";




let _jobService = new JobService()

function drawJobs() {
  let jobsElem = document.querySelector("#jobs")
  let template = ''
  let jobs = _jobService.Jobs
  jobs.forEach(job => {
    template += job.JobTemplate
  })
  jobsElem.innerHTML = template
}

export default class JobController {
  constructor() {
    console.log("job controller works")
    drawJobs()
  }

  addJobs(e) {
    e.preventDefault()
    let form = e.target

    let newJob = {
      title: form.title.value,
      company: form.company.value,
      salary: form.salary.value,
      industry: form.industry.value
    }

    _jobService.addJob(newJob)
    form.reset()
    drawJobs()
  }
}