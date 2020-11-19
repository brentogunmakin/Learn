class Marker {
    constructor(size = 'medium', color = 'pink', remainingInk = '100') {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;

    }
    write(input)  {
        let stringNoSpace = input.split(' ').join('')
        if (input === ' ') {
            return ' '
        }
        else if(stringNoSpace <= this.remainingInk) {
            this.remainingInk = this.remainingInk - stringNoSpace.length
            return input
        }
        else if (stringNoSpace > this.remainingInk) {
             newSlice = input.slice(0, this.remainingInk)
             this.remainingInk = 0;
             return newSlice

        }
        

        

    }
    remain() {
        return this.remainingInk;
    }
  
}

//let merk = new Marker();
//console.log(merk);
//merk.write('hello')
//console.log(merk.remain())


module.exports = Marker
