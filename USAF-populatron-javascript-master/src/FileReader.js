const fs = require("fs");

class FileReader {
    constructor() {

    }

    readFile(fileName) {
        if (fileName == undefined) {
            throw new Error("Must have one argument!");
        }

        if (typeof(fileName) != "string") {
            throw new Error("Argument must be a string!");
        }

        return fs.readFileSync(fileName).toString().split("\n");
    }
}

module.exports = FileReader;