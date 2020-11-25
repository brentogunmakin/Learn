function evenOccurrence(array) {
    function getCount(number) {
        var count = 0;

        for (var i in array) {
            if (array[i] == number) {
                count++;
            }
        }

        return count;
    }

    for (var i in array) {
        if (getCount(array[i]) % 2 == 0) {
            return array[i];
        }
    }

    return null;
}

  var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4

//Should return the first consecutive number in an array.