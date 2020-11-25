class Marker {
    constructor(size = 'medium', color = 'pink', remainingInk = '100') {
        this.size = size;
        this.color = color;
        this.remainingInk = remainingInk;

    }
    write(input)  {
        let inputArray = [];
        let charsThatTakeInk = [];
        let writtenArray = [];
        inputArray = input.split('');
        for( let i = 0; i < inputArray.length; i++) {
            this.remainingInk--;
            while( this.remainingInk >=0 || inputArray[i] == ' ') {
                if (inputArray[i] = ' ') {
                    this.remainingInk++;
                }
            inputArray[i] == ' ' ? console.log(): charsThatTakeInk.push(inputArray[i]);
            writtenArray.push(inputArray[i])

            }
        }

        return writtenArray
        //console.log(charsThatTakeInk)
       

        

    }
    remain() {
        return this.remainingInk;
    }
  
}

//let merk = new Marker();
//console.log(merk);
//merk.write('hello')
//merk.write('hello how are you')


//module.exports = Marker;
