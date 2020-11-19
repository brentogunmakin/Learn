class Marker {
    constructor(size = 'medium', color = 'pink', remainingInk = '100') {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;

    }
    write(input)  {
       

        

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
