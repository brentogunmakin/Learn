class Computer {
    constructor (name = 'MaBoock Air', operatingSystem ='macOS', processor = '2.3GHz dual-core Intel Core i5', memory = '8GB', graphics = 'Intel Iris Plus Graphics 640'){
        this.name = name ;
        this.operatingSystem = operatingSystem;
        this.processor = processor;
        this.memory = memory;
        this.graphics = graphics;
        this.on = false;
        this.properties = [this.name, this.operatingSystem, this.processor, this.memory,this.graphics]


    }
    describe() {
        return this.properties

    }
    
    power(){
        this.on = !this.on
    }

  
}


module.exports = Computer
