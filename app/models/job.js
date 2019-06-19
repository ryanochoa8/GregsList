export default class Job {
  constructor(data) {
    this.title = data.title || ''
    this.company = data.company || ''
    this.salary = data.salary || ''
    this.industry = data.industry || ''
  }

  get JobTemplate() {
    return `
    <div class="col-4">
      <h4>Job Title: ${this.title}</h4>
      <h4>Company: ${this.company}</h4>
      <h4>Annual Salary: $${this.salary}</h4>
      <p>Industry: ${this.industry}</p>
    </div>
    `
  }
}