class Car {
    constructor() {
        this.fuel = 0; 
        this.distance = 0; 
    }
    move() { //NOTE: Notice here how we just write methods instead of chaining them to anything else, like the previous syntax
        if(this.fuel < 1) {
            throw new RangeError("Fuel tank is depleted")
        }
        this.fuel--
        this.distance += 2
    }
    addFuel() {
        if(this.fuel >= 60) {
            throw new RangeError("Fuel tank is full")
        }
        this.fuel++
    }
    getDistance() {
        return this.distance;
    }
}




let vehicle = new Car();

vehicle.addFuel()
vehicle.move()
vehicle.addFuel()
vehicle.move()
vehicle.addFuel()
vehicle.move()
vehicle.addFuel()
vehicle.move()
vehicle.addFuel()
vehicle.move()
vehicle.addFuel()
vehicle.move()
vehicle.addFuel()
vehicle.move()
console.log(vehicle.getDistance())