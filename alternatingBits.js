/* ===== Alternating bits ===== */

var hasAlternatingBits = function (n) {

    let result = true;

    let index = 1;

    let compareingBit = n & 1;

    while ((n >> index) >= 1) {

        if (compareingBit == (n >> index & 1)) {

            return false;

        } else {

            compareingBit = (n >> index & 1);

        }

        index++;

    }

    return result;

}

let hasAlternatingBitsResult = hasAlternatingBits(11);

console.log(hasAlternatingBitsResult);