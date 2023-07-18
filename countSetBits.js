/* ===== Count set bits ===== */

var hammingWeight = function (n) {

    let index = 0;

    let oneCount = 0;

    while ((n >> index) >= 1) {

        if ((n >> index) & 1 == 1) {

            oneCount++;

        }

        index++;

    }

    return oneCount;

};