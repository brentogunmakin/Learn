class Car {
    constructor() {
        this.wheels = 4;
        this.doors = 4;
        this.opendoors = 0;



    }

    opendoor() {
        if(this.opendoors < this.doors) {
            this.opendoors++;

        }
        else if (this.opendoors >= this.doors)
        {
            console.log( 'All the doors are already open.')
        }
    }
    getDoors() {
        return `You have ${this.doors} total doors, ${this.opendoors} of which are currently opened.`
    }
}



class HondaTruck extends Car {
    constructor(){
        super();
        this.doors = 2;
        this.type = 'Honda Truck';

    }
    getDoors2 ()
     {return this.getDoors();}
    
}

let myTruck = new HondaTruck();
myTruck.opendoor();
myTruck.opendoor();
myTruck.opendoor();
console.log(myTruck.getDoors2());


