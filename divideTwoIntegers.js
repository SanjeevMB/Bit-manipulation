/* ===== Divide two integers ===== */

function divideTwoIntegers(dividend, divisor) {

    let dd = Math.abs(dividend);
    let dv = Math.abs(divisor);
    let output = 0;

    while (dd >= dv) {

        let temp = dv;
        let multiple = 1;

        while (dd >= temp) {

            dd -= temp;
            output += multiple;
            multiple += multiple;
            temp += temp;
        }

    }

    if ((dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0)) {

        output = -output;

    }

    if (output > 2147483647) {

        return 2147483647;

    } else if (output < -2147483648) {

        return -2147483648;

    } else {

        return output;

    }

}

let divideTwoIntegersResult = divideTwoIntegers(1000000000000000, 3);

console.log(divideTwoIntegersResult);