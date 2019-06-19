


export default class House {
  constructor(data) {
    this.bedrooms = data.bedrooms || ''
    this.sqFeet = data.sqFeet || ''
    this.type = data.type || ''
    this.color = data.color || ''
    this.location = data.location || ''
  }

  get HouseTemplate() {
    return `
    <div class="col-4">
      <h4>Bedrooms: ${this.bedrooms}</h4>
      <h4>Square Feet: ${this.sqFeet}</h4>
      <h4>Type of House: ${this.type}</h4>
      <h4>Color: ${this.color}</h4>
      <p>Location: ${this.location}</p>
    </div>
    `
  }
}