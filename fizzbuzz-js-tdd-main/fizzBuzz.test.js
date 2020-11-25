const fizzBuzz = require('./fizzBuzz')



describe('fizzBuzz', () => {
    it('is a function', ()=> {
        expect(typeof fizzBuzz).toEqual('function')
    })
    it(`it returns ['1'] when input is 1`, ()=> {
        expect(fizzBuzz(1)).toEqual(['1'])
    })
    it("returns ['1', '2'] when 2 is the input", () => {
        expect(fizzBuzz(2)).toEqual(["1", "2"])
      })
      it("return ['1', '2', 'Fizz'] when 3 is the input", () => {
        expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"])
    })
    it("returns ['1', '2', 'Fizz', '4', 'Buzz'] when 5 is the input", () => {
        expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
    })
    it("returns ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'] when 15 is the input", () => {
        expect(fizzBuzz(15)).toEqual(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'])
    })
})