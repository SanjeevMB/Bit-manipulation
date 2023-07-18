/* =====  Number to hexadecimal ===== */

function numberToHexadecimal(num) {

    let number;

    if (num == 0) {

        return `0`;

    } else if (num < 0) {

        number = -1 * num;

    } else {

        number = num;

    }

    let hexadecimal = [];

    let hexadecimalString = ``;

    while (number > 0) {

        let reminder = number % 16;

        number = Math.floor(number / 16);

        hexadecimal.unshift(reminder);

    }

    if (num < 0) {

        for (let i = 0; i < hexadecimal.length; i++) {

            hexadecimal[i] = 15 - hexadecimal[i];

        }

        for (let i = hexadecimal.length; i < 8; i++) {

            hexadecimal.unshift(15);

        }

        hexadecimal[7] = hexadecimal[7] + 1;

        for (let i = 7; i >= 0; i--) {

            if (hexadecimal[i] == 16) {

                hexadecimal[i] = 0;
                hexadecimal[i - 1] = hexadecimal[i - 1] + 1;

            }
        }

        for (let i = 0; i < hexadecimal.length; i++) {

            if (hexadecimal[i] < 10) {

                hexadecimalString += hexadecimal[i];

            } else if (hexadecimal[i] == 10) {

                hexadecimalString += `a`;

            } else if (hexadecimal[i] == 11) {

                hexadecimalString += `b`;

            } else if (hexadecimal[i] == 12) {

                hexadecimalString += `c`;

            } else if (hexadecimal[i] == 13) {

                hexadecimalString += `d`;

            } else if (hexadecimal[i] == 14) {

                hexadecimalString += `e`;

            } else if (hexadecimal[i] == 15) {

                hexadecimalString += `f`;

            }

        }

    } else {

        for (let i = 0; i < hexadecimal.length; i++) {

            if (hexadecimal[i] < 10) {

                hexadecimalString += hexadecimal[i];

            } else if (hexadecimal[i] == 10) {

                hexadecimalString += `a`;

            } else if (hexadecimal[i] == 11) {

                hexadecimalString += `b`;

            } else if (hexadecimal[i] == 12) {

                hexadecimalString += `c`;

            } else if (hexadecimal[i] == 13) {

                hexadecimalString += `d`;

            } else if (hexadecimal[i] == 14) {

                hexadecimalString += `e`;

            } else if (hexadecimal[i] == 15) {

                hexadecimalString += `f`;

            }

        }

    }

    return hexadecimalString;

}

let numberToHexadecimalResult = numberToHexadecimal(-100000);

console.log(numberToHexadecimalResult);