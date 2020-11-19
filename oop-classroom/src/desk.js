class Desk {
    constructor(length = 60, width = 48 , height = 48, isWhiteboard = false) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.isWhiteboard = isWhiteboard;
        this.content = '';
        this.properties = [this.length,this.width, this.height, this.isWhiteboard]
    }
    describe() {
        return this.properties;
    }
    write(input) {
        this.content += input
    }
    wipe() {
        if(this.isWhiteboard == true) {
            this.content = '';
        }
        
    }


  
}

//let desk1 = new Desk();
//console.log(desk1.describe())

//desk1.write('Hello ');
//desk1.write('Bye');
//console.log(desk1.cont())

module.exports = Desk
