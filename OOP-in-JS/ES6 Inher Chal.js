class Vehicle {
  constructor (numberOfWheels, maxSpeed) {
    this.numberOfWheels = numberOfWheels
    this.maxSpeed = maxSpeed
    this.currentSpeed = 0
  }

  accelerate (amount=1) {
    if ((this.currentSpeed + amount) < this.maxSpeed) {
      this.currentSpeed += amount
    } else {
      this.currentSpeed = maxSpeed
    }

    return this.currentSpeed
  }

  decelerate (amount=1) {
    if ((this.currentSpeed - amount) > 0) {
      this.currentSpeed -= amount
    } else {
      this.currentSpeed = 0
    }

    return this.currentSpeed
  }
}

class Bicycle extends Vehicle {
  constructor(color) {
    //This passes 2 as number of wheels and 30 as the max speed to the parent class Vehicle
    super(2,30)
    //This initiates color for bicycle since the parent class does not contain a variable color
    this.color = color;
    
  }

  accelerate() {
    super.accelerate(5)
    return this.currentSpeed;
  }
  decelerate() {
    super.decelerate(5)
    return this.currentSpeed
  }
  stop() {
    this.currentSpeed = 0
    return this.currentSpeed
  }

}

const bicycle = new Bicycle('bright red')
console.log(bicycle.color) // 'bright red'
console.log(bicycle.numberOfWheels) // 2, it sets this automatically
console.log(bicycle.maxSpeed) // 30, it sets this automatically

console.log(bicycle.accelerate()) // 5, increase speed by 5 each time
console.log(bicycle.accelerate()) // 10
console.log(bicycle.accelerate()) // 15

console.log(bicycle.decelerate()) // 10, decrease speed by 5 each time
console.log(bicycle.stop()) // 0, a new method that completely stops the bike