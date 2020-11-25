const FileReader = require("../FileReader");

describe("FileReader", () => {
    describe("new FileReader()", () => {
        it("should instantiate a new instance of FileReader", () => {
            const reader = new FileReader();
            expect(reader instanceof FileReader).toBeTruthy();
        });
    });

    describe("#readFile()", () => {
        it("should exist", () => {
            const reader = new FileReader();
            expect(typeof(reader.readFile)).toEqual("function");
        });

        it("should require one argument", () => {
            const reader = new FileReader();
            expect(() => reader.readFile()).toThrow(Error);
        });

        it("should require that its argument is a string", () => {
            const reader = new FileReader();
            expect(() => reader.readFile(0)).toThrow(Error);
        });

        it("should return an array of the contents of each line in the file it was passed", () => {
            const reader = new FileReader();

            const actual = reader.readFile("./data/worldcitiespop.csv")[0];
            const expected = "Country,City,AccentCity,Region,Population,Latitude,Longitude";

            expect(actual).toEqual(expected);
        });
    });
});