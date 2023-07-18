/* ===== Sort integers by number of set bits ===== */

function sortIntegersByNumberOfSetBits(array) {

    let n1 = array.length - 1;

    for (let i = 0; i < n1; i++) {

        for (let j = 0; j < n1 - i; j++) {

            if (array[j] > array[j + 1]) {

                [array[j], array[j + 1]] = [array[j + 1], array[j]];

            }

        }

    }

    let arrayWithSetBits = [];

    for (let i = 0; i < array.length; i++) {

        let num = array[i];
        let index = 0;
        let count = 0;
        let tempArray = [];

        while ((num >> index) >= 1) {

            if ((num >> index & 1) == 1) {

                count++;

            }

            index++;

        }

        tempArray.push(array[i]);
        tempArray.push(count);

        arrayWithSetBits.push(tempArray);

    }

    let n2 = arrayWithSetBits.length - 1;

    for (let i = 0; i < n2; i++) {

        for (let j = 0; j < n2 - i; j++) {

            if (arrayWithSetBits[j][1] > arrayWithSetBits[j + 1][1]) {

                [arrayWithSetBits[j], arrayWithSetBits[j + 1]] = [arrayWithSetBits[j + 1], arrayWithSetBits[j]];

            }

        }

    }

    let resultArray = [];

    for (let i = 0; i < arrayWithSetBits.length; i++) {

        resultArray.push(arrayWithSetBits[i][0]);

    }

    return resultArray;

}

let sortIntegersByNumberOfSetBitsResult = sortIntegersByNumberOfSetBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]); // [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(sortIntegersByNumberOfSetBitsResult);